import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
  Patch,
  Get,
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
import ResponseData from 'src/utils/response-data';
import { RoutersService } from './router.service';
import { CreateRouterDto, UpdateRouterDto } from './dto';

@ApiTags('Routers')
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Permission denied' })
@UseGuards(AuthGuard('jwt'))
@Controller('routers')
export class RoutersController {
  constructor(private readonly routersService: RoutersService) {}

  // CREATE A NEW SERVER
  @ApiOperation({
    summary: 'Create a new router',
    description: 'Create a new router',
  })
  @ApiOkResponse({ description: 'Create a new router successfully' })
  @ApiBadRequestResponse({ description: 'Create a new router failed' })
  @Post('/create')
  async create(@Req() request, @Body() createRouterDto: CreateRouterDto) {
    const { _id } = request.user;
    console.log(`CreatingRouter ${_id}`);
    createRouterDto.deliverId = _id;
    // console.log(createRouterDto);
    return this.routersService.create(createRouterDto);
  }

  // GET SERVER, MEMBER GET SERVER
  @ApiOperation({
    summary: 'Get router by ID',
    description: 'Get router by ID',
  })
  @ApiOkResponse({ description: 'Get router by ID successfully' })
  @ApiBadRequestResponse({ description: 'Get router failed' })
  @Get('/get/:id')
  async get(@Req() req, @Param('id') routerId: string) {
    const { _id } = req.user;
    return this.routersService.getByID(routerId);
  }

  // GET SERVER, MEMBER GET SERVER
  @ApiOperation({
    summary: 'Deliver get last coordinates today',
    description: 'Deliver get last coordinates today',
  })
  @ApiOkResponse({
    description: 'Deliver get last coordinates today successfully',
  })
  @ApiBadRequestResponse({
    description: 'Deliver get last coordinates today failed',
  })
  @Get('/get-last-coordinates')
  async getLastCoords(@Req() req) {
    const { _id } = req.user;
    return this.routersService.getLastCoordsTodayDeliver(_id);
  }

  // UPDATE ROUTER
  @ApiOperation({
    summary: 'Update router',
    description: 'Update router',
  })
  @ApiOkResponse({
    description: 'Update array coords successfully',
  })
  @ApiBadRequestResponse({
    description: 'Update array coords failed',
  })
  @Patch('/deliver-update')
  async update(@Req() request, @Body() updateRouterDto: UpdateRouterDto) {
    const { _id } = request.user;
    // console.log(_id);
    await this.routersService.updateRouter(updateRouterDto, _id);

    return new ResponseData(
      true,
      { message: 'Update coords list successfully' },
      null,
    );
  }

  // UPDATE ROUTER
  @ApiOperation({
    summary: 'Delete router',
    description: 'Delete router',
  })
  @ApiOkResponse({
    description: 'Delete router successfully',
  })
  @ApiBadRequestResponse({
    description: 'Delete router failed',
  })
  @Delete('/delete/:id')
  async delete(@Req() request, @Param('id') routerId: string) {
    const { _id } = request.user;
    await this.routersService.deleteRouter(routerId);
  }
}
