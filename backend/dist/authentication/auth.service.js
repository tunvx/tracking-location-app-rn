"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_1 = require("../users");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signJwtToken(_id, email) {
        const payload = {
            sub: _id,
            email,
        };
        console.log(this.configService.get('EXPIRES_IN'));
        console.log(this.configService.get('JWT_SECRET'));
        const jwtString = await this.jwtService.signAsync(payload, {
            expiresIn: this.configService.get('EXPIRES_IN'),
            secret: this.configService.get('JWT_SECRET'),
        });
        return {
            accessToken: jwtString,
        };
    }
    async verifyPassword(plainTextPassword, hashedPassword) {
        const isPasswordMatching = await bcrypt.compare(plainTextPassword, hashedPassword);
        if (!isPasswordMatching) {
            throw new common_1.HttpException('Wrong credentials provided', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async login(authUserDto) {
        try {
            const user = await this.userService.findByEmail(authUserDto.email);
            await this.verifyPassword(authUserDto.password, user.hashedPassword);
            delete user.hashedPassword;
            const accessToken = this.signJwtToken(user._id.toString(), user.email);
            return accessToken;
        }
        catch (err) {
            throw new common_1.ForbiddenException('Wrong credentials provided');
        }
    }
    async register(authUserDto) {
        const user = await this.userService.create(authUserDto);
        return this.signJwtToken(user._id.toString(), user.email);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map