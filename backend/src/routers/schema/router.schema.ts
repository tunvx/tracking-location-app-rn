import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { type } from 'os';
import { User } from 'src/users/schema';
import { Coords, getTime } from 'src/utils';

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
  deliver: string;

  @Prop({
    default: getTime(),
  })
  time: string;

  @Prop({
    required: true,
  })
  coords: Coords[] = [];
}

export const RouterSchema = SchemaFactory.createForClass(Router);
