import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { getTime } from 'src/utils';
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
    const routerExisted = await this.routerModel.findOne({
      deliver: createRouterDto.deliver,
      time: getTime(),
    });
    if (routerExisted) {
      console.log('Router have already existed');
      return;
    }
    const router = await new this.routerModel(createRouterDto);
    await router.save();
    return router;
  }

  async update(updateRouterDto: UpdateRouterDto, user_id) {
    const thisDay = getTime();
    console.log(thisDay);
    const router = await this.routerModel.findOne({
      deliver: user_id,
      time: thisDay,
    });
    console.log(router);
    router.coords = router.coords.concat(updateRouterDto.coords);
    await router.save();
    return router;
  }

  async getByID(_id) {
    return this.routerModel.findOne({ _id: _id });
  }
}
