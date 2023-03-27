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
import { UpdateUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from './schema';
import { AuthUserDto } from 'src/authentication/dto';
export declare class UsersService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    create(authUserDto: AuthUserDto): Promise<User>;
    findByObjID(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(_id: string, updateUserDto: UpdateUserDto): Promise<import("mongodb").UpdateResult>;
    addRouter(userId: any, routerId: any): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
