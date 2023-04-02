import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { type } from 'os';
import { User } from 'src/users/schema';
import { Coords } from 'src/utils';

export class CreateRouterDto {
  @ApiProperty({ required: false, default: '' })
  deliverId: string; // set from request user_id

  @ApiProperty({ required: false, default: [] })
  coords: Coords[] = [];

  @ApiProperty({ required: false, default: [] })
  times: string[] = [];

  @ApiProperty({ required: false, default: 0 })
  distanceTraveled: number;
}
