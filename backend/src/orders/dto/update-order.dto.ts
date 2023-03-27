import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schema';
import { Coords, getTime } from 'src/utils';

export class UpdateOrderDto {
  @ApiProperty({
    required: false,
  })
  note: string;

  @ApiProperty({
    required: false,
  })
  predictTime: string;

  @ApiProperty({
    required: false,
  })
  deliverId: string;

  @ApiProperty({
    required: true,
    default: false,
  })
  delivered: boolean;

  @ApiProperty({
    required: false,
  })
  deliveryTime: string;

  @ApiProperty({
    required: false,
  })
  deliveryCoordinates: Coords;
}
