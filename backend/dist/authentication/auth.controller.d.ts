import { AuthService } from './auth.service';
import { AuthUserDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authUserDto: AuthUserDto): Promise<Object>;
    register(authUserDto: AuthUserDto): Promise<Object>;
}
