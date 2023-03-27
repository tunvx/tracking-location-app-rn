import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { type } from 'os';
import { User } from 'src/users/schema';
import { Coords, getTime } from 'src/utils';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  customerId: string;

  @Prop({
    required: true,
  })
  productName: string;

  @Prop({
    required: true,
  })
  address: string;

  @Prop({
    required: true,
  })
  coords: Coords;

  @Prop({
    required: true,
  })
  price: number;

  @Prop({
    required: false,
  })
  note: string;

  @Prop({
    required: false,
  })
  predictTime: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  })
  deliverId: string;

  @Prop({
    required: true,
    default: false,
  })
  delivered: boolean;

  @Prop({
    required: false,
  })
  deliveryTime: string;

  @Prop({
    required: false,
  })
  deliveryCoordinates: Coords;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
