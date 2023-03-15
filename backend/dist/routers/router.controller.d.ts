import ResponseData from 'src/utils/response-data';
import { RoutersService } from './router.service';
import { CreateRouterDto, UpdateRouterDto } from './dto';
export declare class RoutersController {
    private readonly routersService;
    constructor(routersService: RoutersService);
    create(req: any, createRouterDto: CreateRouterDto): Promise<import("./schema").Router & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    get(req: any, routerId: string): Promise<import("./schema").Router & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(request: any, updateRouterDto: UpdateRouterDto): Promise<ResponseData>;
}
