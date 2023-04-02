import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ShortUserInfo, User, UserDocument } from './schema';
import { AuthUserDto } from 'src/authentication/dto';
import * as bcrypt from 'bcrypt';
import { getTime, RouterDate } from 'src/utils';
import { getToday } from 'src/utils/backup';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  // CREATE A NEW USER
  async create(authUserDto: AuthUserDto): Promise<User> {
    try {
      const user = await new this.userModel(authUserDto);

      // Gen and store hashedPassword
      const satlOrRounds = await bcrypt.genSalt();
      user.hashedPassword = await bcrypt.hash(
        authUserDto.password,
        satlOrRounds,
      );

      await user.save();
      console.log(user);

      return user;
    } catch (err) {
      if (err.code == 11000) {
        throw new ForbiddenException('User with this email already exists');
      }
      throw new HttpException('Something went wrong', err);
    }
  }

  // FIND A USER BY _ID
  async findByObjID(id: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ _id: id }).lean();
      // user.routers = [];
      // await user.save();
      return user;
    } catch (err) {
      if (err.code == 404) {
        throw new ForbiddenException('User not found');
      }
      throw new HttpException('Something went wrong', err);
    }
  }

  // FIND A USER BY EMAIL
  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ email: email }).lean().exec();
      return user;
    } catch (err) {
      if (err.code == 404) {
        throw new ForbiddenException('User not found');
      }
      throw new HttpException('Something went wrong', err);
    }
  }

  // UPDATE USER INFORMATION
  async update(_id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userModel.findOne({ _id }).lean().exec();
      return this.userModel.updateOne({ _id }, updateUserDto);
    } catch (err) {
      throw new HttpException('Something went wrong', err);
    }
  }

  async pushMyListRouters(userId, routerId) {
    const user = await this.userModel.findById(userId);
    if (!user) {
      console.log('User not found');
      return;
    }
    await user.routers.push({ time: getToday(), id_router: routerId });
    await user.save();
    return user;
  }

  async popMyListRouters(deliverId, time) {
    const user = await this.userModel.findById(deliverId);
    if (!user) {
      console.log('User not found');
      return;
    }
    user.routers = user.routers.filter(
      (routerdate) => routerdate.time !== time,
    );
    await user.save();
    return user;
  }
}
