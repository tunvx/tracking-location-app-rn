import { User } from 'src/users/schema';
import { UsersService } from 'src/users/users.service';
declare const JwtStratege_base: new (...args: any[]) => any;
export declare class JwtStratege extends JwtStratege_base {
    private userService;
    constructor(userService: UsersService);
    validate(payload: any): Promise<User>;
}
export {};
