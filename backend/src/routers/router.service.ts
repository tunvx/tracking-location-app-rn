import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { getTime } from 'src/utils';
import { getToday } from 'src/utils/backup';
import { CreateRouterDto, UpdateRouterDto } from './dto';
import { Router, RouterDocument } from './schema';

@Injectable()
export class RoutersService {
  constructor(
    @InjectModel(Router.name)
    private routerModel: Model<RouterDocument>,
    private usersService: UsersService,
  ) {}

  async create(createRouterDto: CreateRouterDto) {
    console.log(`Creating router by deliver ${createRouterDto.deliverId}`);
    const routerExisted = await this.routerModel.findOne({
      deliverId: createRouterDto.deliverId,
      time: getToday(),
    });
    if (routerExisted) {
      console.log('Router have already existed');
      return routerExisted;
    }
    const router = await new this.routerModel(createRouterDto);
    await router.save();

    // add this new router for list router of user
    await this.usersService.pushMyListRouters(
      createRouterDto.deliverId,
      router._id,
    );
    return router;
  }

  async updateRouter(updateRouterDto: UpdateRouterDto, deliver_id: string) {
    // console.log(updateRouterDto);
    //console.log(`Deliver: ${deliver_id}`);
    const router = await this.routerModel.findOne({
      deliverId: deliver_id,
      time: getToday(),
    });

    if (!router) {
      // console.log('Router for this day is not available');
    }

    if (updateRouterDto.coord != null && updateRouterDto.time != '') {
      // console.log('Cho phep update router');
      // console.log(`Cap nhat cho thoi diem ${updateRouterDto.time}`);
      // console.log(`Deliver of router: ${router.deliverId}`);

      router.coords.push(updateRouterDto.coord);
      router.times.push(updateRouterDto.time);
      router.distanceTraveled = updateRouterDto.distanceTraveled;
    }
    await router.save();
    // console.log(router);
    return router;
  }

  async deleteRouter(id_router: string) {
    const router = await this.routerModel.findOne({ _id: id_router });
    const user = await this.usersService.popMyListRouters(
      router.deliverId,
      router.time,
    );
    const routerDeleted = await this.routerModel.findOneAndDelete({
      _id: id_router,
    });
    if (user && routerDeleted) {
      console.log('da cap nhat dong bo');
    }
    return routerDeleted;
  }

  async getByID(_id) {
    return this.routerModel.findOne({ _id: _id });
  }

  async getLastCoordsTodayDeliver(deliverId) {
    const today = getToday();

    const router = await this.routerModel
      .findOne({
        deliverId: deliverId,
        time: today,
      })
      .lean();

    if (!router) {
      console.error(
        'Could not found router for you today, please try login again',
      );
      return;
    }
    // console.log(router.coords[router.coords.length - 1]);
    // console.log(router.times[router.coords.length - 1]);
    return {
      coords: router.coords[router.coords.length - 1],
      time: router.times[router.coords.length - 1],
      distanceTraveled: router.distanceTraveled,
    };
  }
}
