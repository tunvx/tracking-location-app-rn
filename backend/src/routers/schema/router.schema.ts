import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { type } from 'os';
import { User } from 'src/users/schema';
import { Coords } from 'src/utils';
import { getToday } from 'src/utils/backup';

export type RouterDocument = Router & Document;

@Schema({ timestamps: true })
export class Router {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  deliverId: string;

  @Prop({
    default: getToday(),
  })
  time: string;

  @Prop({
    required: true,
    default: [],
  })
  coords: Coords[] = [];

  @Prop({
    required: true,
    default: [],
  })
  times: string[] = [];

  @Prop({
    required: true,
    default: 0,
  })
  distanceTraveled: number;
}

export const RouterSchema = SchemaFactory.createForClass(Router);
