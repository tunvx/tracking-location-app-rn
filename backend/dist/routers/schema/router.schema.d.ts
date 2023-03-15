import mongoose, { Document } from 'mongoose';
import { Coords } from 'src/utils';
export type RouterDocument = Router & Document;
export declare class Router {
    _id: string;
    deliver: string;
    time: string;
    coords: Coords[];
}
export declare const RouterSchema: mongoose.Schema<Router, mongoose.Model<Router, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Router>;
