import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { type } from 'os';
import { User } from 'src/users/schema';
import { Coords } from 'src/utils';

export class UpdateRouterDto {
  @ApiProperty({ required: false, default: { latitude: -1, longitude: -1 } })
  coord: Coords;

  @ApiProperty({ required: false, default: '' })
  time: string;

  @ApiProperty({ required: false, default: 0 })
  distanceTraveled: number;
}
