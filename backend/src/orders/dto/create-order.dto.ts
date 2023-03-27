import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { type } from 'os';
import { User } from 'src/users/schema';
import { Coords, getTime } from 'src/utils';

export class CreateOrderDto {
  @ApiProperty({
    required: true,
  })
  customerId: string;

  @ApiProperty({
    required: true,
  })
  productName: string;

  @ApiProperty({
    required: true,
  })
  address: string;

  @ApiProperty({
    required: true,
    default: { latitude: -1, longitude: -1 },
  })
  coords: Coords;

  @ApiProperty({
    required: true,
  })
  price: number;

  @ApiProperty({
    required: false,
    default: '',
  })
  note: string;

  @ApiProperty({
    required: false,
    default: '',
  })
  predictTime: string;

  @ApiProperty({
    required: false,
    default: null,
  })
  deliverId: string;

  @ApiProperty({
    required: true,
    default: false,
  })
  delivered: boolean;

  @ApiProperty({
    required: false,
    default: '',
  })
  deliveryTime: string;

  @ApiProperty({
    required: false,
    default: { latitude: -1, longitude: -1 },
  })
  deliveryCoordinates: Coords;
}
