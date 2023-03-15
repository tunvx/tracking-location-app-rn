import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { type } from 'os';
import { User } from 'src/users/schema';
import { Coords } from 'src/utils';

export class CreateRouterDto {
  @ApiProperty({ required: true })
  deliver: string; // set from request user_id

  @ApiProperty({ required: false })
  coords: Coords[] = [];
}
