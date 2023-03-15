import { Model } from 'mongoose';
import { UsersService } from 'src/users';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { OrderDocument } from './schema';
export declare class OrdersService {
    private orderModel;
    private userService;
    constructor(orderModel: Model<OrderDocument>, userService: UsersService);
    create(createOrderDto: CreateOrderDto): Promise<any>;
    update(updateOrderDto: UpdateOrderDto, _id: any): Promise<void>;
}
