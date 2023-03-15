import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { CreateRouterDto, UpdateRouterDto } from './dto';
import { Router, RouterDocument } from './schema';
export declare class RoutersService {
    private routerModel;
    private usersService;
    constructor(routerModel: Model<RouterDocument>, usersService: UsersService);
    create(createRouterDto: CreateRouterDto): Promise<Router & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(updateRouterDto: UpdateRouterDto, user_id: any): Promise<Router & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getByID(_id: any): Promise<Router & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
