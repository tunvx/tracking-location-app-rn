import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AuthGuard } from '@nestjs/passport';

import { OrdersService } from './order.service';
import { CreateOrderDto, UpdateOrderDto } from './dto';

import ResponseData from 'src/utils/response-data';

@ApiTags('Orders')
// @ApiBearerAuth()
// @ApiForbiddenResponse({ description: 'Permission denied' })
// @UseGuards(AuthGuard('jwt'))
@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // CREATE A NEW ORDER
  @ApiOperation({
    summary: 'Create a new order',
    description: 'Create a new order',
  })
  @ApiOkResponse({ description: 'Create a new order successfully' })
  @ApiBadRequestResponse({ description: 'Create a new order failed' })
  @Post('orders/create')
  async createNewOrder(@Req() req, @Body() createOrderDto: CreateOrderDto) {
    //  Assign owner of message
    // const { _id } = req.user;

    const order = this.ordersService.create(createOrderDto);
    return order;
  }

  // CREATE A NEW ORDER
  @ApiOperation({
    summary: 'Get all orders',
    description: 'Get all orders',
  })
  @ApiOkResponse({ description: 'Get all orders successfully' })
  @ApiBadRequestResponse({ description: 'Get all orders failed' })
  @Get('orders/all')
  async getAllOrders(@Req() req) {
    //  Assign owner of message
    // const { _id } = req.user;

    const orders = this.ordersService.findAll();
    return orders;
  }

  @ApiOperation({
    summary: 'Get a order',
    description: 'Get a order',
  })
  @ApiOkResponse({ description: 'Get a order successfully' })
  @ApiBadRequestResponse({ description: 'Get a order failed' })
  @Get('orders/get/:id')
  async getOneOrder(@Req() req, @Param('id') orderId: string) {
    //  Assign owner of message
    // const { _id } = req.user;

    const orders = this.ordersService.findOne(orderId);
    return orders;
  }

  // OWNER UPDATE MESSAGE'S CONTENT
  @ApiOperation({
    summary: 'Updates the order content by ID',
    description: 'Updates the order content by ID',
  })
  @ApiOkResponse({
    description: 'Update order content successfully',
  })
  @ApiBadRequestResponse({
    description: 'Update order content failed',
  })
  @Patch('orders/update/:id')
  async updateInfoOrder(
    @Param('id') orderId: string,
    @Req() req,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    // get the Id of user who request edit content
    // const { _id } = req.user;
    const updatedOrder = await this.ordersService.update(
      updateOrderDto,
      orderId,
    );
    console.log(updateOrderDto);
    return updatedOrder;
  }
}
