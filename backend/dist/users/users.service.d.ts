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
}
