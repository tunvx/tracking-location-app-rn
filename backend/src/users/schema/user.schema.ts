import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document, ObjectId } from 'mongoose';

import {} from '@nestjs/common';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export type UserDocument = User & Document;

export class ShortUserInfo {
  _id: string;
  name: string;
}

@Schema({ timestamps: true })
export class User {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ default: 'noname' })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @Prop({ unique: true, required: true })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Prop({ required: false })
  hashedPassword?: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: '' }],
  })
  @Type(() => User)
  routers?: string[] = [];
}
export const UserSchema = SchemaFactory.createForClass(User);
