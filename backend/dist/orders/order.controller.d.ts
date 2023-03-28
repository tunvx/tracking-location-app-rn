import { OrdersService } from './order.service';
import { CreateOrderDto, UpdateOrderDto } from './dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createNewOrder(req: any, createOrderDto: CreateOrderDto): Promise<import("./schema").Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllOrders(req: any): Promise<(import("./schema").Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOneOrder(req: any, orderId: string): Promise<(import("./schema").Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateInfoOrder(orderId: string, req: any, updateOrderDto: UpdateOrderDto): Promise<import("./schema").Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
