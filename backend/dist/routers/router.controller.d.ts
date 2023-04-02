import ResponseData from 'src/utils/response-data';
import { RoutersService } from './router.service';
import { CreateRouterDto, UpdateRouterDto } from './dto';
export declare class RoutersController {
    private readonly routersService;
    constructor(routersService: RoutersService);
    create(request: any, createRouterDto: CreateRouterDto): Promise<import("./schema").Router & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    get(req: any, routerId: string): Promise<import("./schema").Router & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getLastCoords(req: any): Promise<{
        coords: import("mongoose").LeanDocument<import("../utils").Coords>;
        time: string;
        distanceTraveled: number;
    }>;
    update(request: any, updateRouterDto: UpdateRouterDto): Promise<ResponseData>;
    delete(request: any, routerId: string): Promise<void>;
}
