import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { Order, OrderDocument } from './schema';
import { UsersService } from 'src/users';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<OrderDocument>,
  ) {}

  // Tao don hang
  async create(createMessageDto: CreateOrderDto) {
    const order = await new this.orderModel(createMessageDto);
    await order.save();
    return order;
  }

  // Update theo id cua don hang
  async update(updateOrderDto: UpdateOrderDto, order_id) {
    const order = await this.orderModel.findOneAndUpdate(
      { _id: order_id },
      updateOrderDto,
    );
    return order;
  }

  async delete(order_id) {
    const order = await this.orderModel.findOneAndDelete({ _id: order_id });
    return order;
  }

  async findAll() {
    return await this.orderModel.find();
  }

  async findOne(order_id) {
    return await this.orderModel.find({ _id: order_id });
  }
}
