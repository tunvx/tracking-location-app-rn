import mongoose, { Document, ObjectId } from 'mongoose';
import { Coords } from 'src/utils';
export type OrderDocument = Order & Document;
export declare class Order {
    _id: ObjectId;
    customer: string;
    address: string;
    coords?: Coords;
    price: number;
    note?: string;
    delivered?: boolean;
    deliver?: string;
    deliveringTime?: string;
    deliveringCoords?: Coords;
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order>;
