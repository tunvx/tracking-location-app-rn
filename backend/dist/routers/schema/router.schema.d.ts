import mongoose, { Document } from 'mongoose';
import { Coords } from 'src/utils';
export type RouterDocument = Router & Document;
export declare class Router {
    _id: string;
    deliverId: string;
    time: string;
    coords: Coords[];
    times: string[];
    distanceTraveled: number;
}
export declare const RouterSchema: mongoose.Schema<Router, mongoose.Model<Router, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Router>;
