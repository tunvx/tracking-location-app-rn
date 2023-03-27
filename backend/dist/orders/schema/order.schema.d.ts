import mongoose, { Document } from 'mongoose';
import { Coords } from 'src/utils';
export type OrderDocument = Order & Document;
export declare class Order {
    _id: string;
    customerId: string;
    productName: string;
    address: string;
    coords: Coords;
    price: number;
    note: string;
    predictTime: string;
    deliverId: string;
    delivered: boolean;
    deliveryTime: string;
    deliveryCoordinates: Coords;
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order>;
