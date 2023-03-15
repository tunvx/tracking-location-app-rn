import mongoose, { Document, ObjectId } from 'mongoose';
export type UserDocument = User & Document;
export declare class ShortUserInfo {
    _id: string;
    name: string;
}
export declare class User {
    _id: ObjectId;
    name: string;
    email: string;
    hashedPassword?: string;
    routers?: string[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User>;
