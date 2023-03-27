/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { Order, OrderDocument } from './schema';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    create(createMessageDto: CreateOrderDto): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(updateOrderDto: UpdateOrderDto, order_id: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(order_id: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(order_id: any): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
