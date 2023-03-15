import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthUserDto {
  @ApiProperty({ required: true, default: 'driverxx@gmail.com' })
  @Prop({ required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: true, default: '1234' })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}
