import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema';
import { ResponseData } from 'src/utils';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(request: any): Promise<{
        _id: import("mongoose").Schema.Types.ObjectId;
        name: string;
        email: string;
        routers?: import("src/utils").RouterDate[];
    }>;
    getByObjId(id: string): Promise<User>;
    update(request: any, updateUserDto: UpdateUserDto): Promise<ResponseData>;
}
