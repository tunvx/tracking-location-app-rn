import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from './dto';
import { UsersService } from 'src/users';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly configService;
    constructor(userService: UsersService, jwtService: JwtService, configService: ConfigService);
    private signJwtToken;
    private verifyPassword;
    login(authUserDto: AuthUserDto): Promise<Object>;
    register(authUserDto: AuthUserDto): Promise<Object>;
}
