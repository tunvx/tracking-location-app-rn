import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { RouterDate } from 'src/utils';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({
    required: false,
    default: [{ time: '', id_router: '' }],
  })
  routers?: RouterDate[] = [];
}
