import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  NotFoundException,
  UseGuards,
  Req,
} from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ShortUserInfo, User } from './schema';

import { ResponseData } from 'src/utils';
import { UpdateRouterDto } from 'src/routers/dto';
import { RoutersService } from 'src/routers/router.service';

@ApiTags('User')
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Permission denied' })
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Retrieve all the information of the logged in user',
    description: 'Retrieve all the information of the logged in user',
  })
  @ApiOkResponse({
    description: 'Retrieve all your information successfully',
  })
  @ApiBadRequestResponse({
    description: 'Retrieval of all your information failed',
  })
  @Get('me')
  async me(@Req() request) {
    const { _id } = request.user;
    const user = await this.usersService.findByObjID(_id);
    const { hashedPassword, ...userInfo } = user;
    return userInfo;
  }

  @ApiOperation({
    summary: 'Retrieve all public information of users by ID',
    description: 'Retrieve all public information of users by ID',
  })
  @ApiOkResponse({
    description: 'Retrieve all public information of users by ID successfully',
  })
  @ApiBadRequestResponse({
    description: 'Retrieve all public information of users by ID failed',
  })
  @Get('u/:id')
  async getByObjId(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.findByObjID(id);
    if (!user) {
      throw new NotFoundException("The user's id doesn't exist");
    }
    return user;
  }

  @ApiOperation({
    summary: 'Update logged in user information',
    description: 'Update logged in user information',
  })
  @ApiOkResponse({
    description: 'Update logged in user information successfully',
  })
  @ApiBadRequestResponse({
    description: 'Update logged in user information failed',
  })
  @Patch('me')
  async update(@Req() request, @Body() updateUserDto: UpdateUserDto) {
    const { _id } = request.user;
    await this.usersService.update(_id, updateUserDto);
    return new ResponseData(
      true,
      { message: 'Successfully updated information' },
      null,
    );
  }
}
