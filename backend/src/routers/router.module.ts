import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RoutersService } from './router.service';
import { RoutersController } from './router.controller';
import { Router, RouterSchema } from './schema';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Router.name, schema: RouterSchema }]),
    UsersModule,
  ],
  controllers: [RoutersController],
  providers: [RoutersService, JwtService],
  exports: [RoutersService],
})
export class RoutersModule {}
