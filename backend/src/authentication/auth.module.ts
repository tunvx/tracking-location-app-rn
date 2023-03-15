import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStratege } from './strategy';

import { User, UserSchema } from 'src/users/schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  // xac dinh model nao duoc dang ky
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService, JwtStratege],
  exports: [AuthService],
})
export class AuthModule {}
