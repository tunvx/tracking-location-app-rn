import { CreateOrderDto } from './dto';
import { ResponseData } from 'src/utils';
import { OrdersService } from './order.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(request: any, createOrderDto: CreateOrderDto): Promise<ResponseData>;
}
