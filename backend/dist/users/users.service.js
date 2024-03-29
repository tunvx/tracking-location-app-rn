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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
const schema_1 = require("./schema");
const bcrypt = require("bcrypt");
const backup_1 = require("../utils/backup");
let UsersService = class UsersService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async create(authUserDto) {
        try {
            const user = await new this.userModel(authUserDto);
            const satlOrRounds = await bcrypt.genSalt();
            user.hashedPassword = await bcrypt.hash(authUserDto.password, satlOrRounds);
            await user.save();
            console.log(user);
            return user;
        }
        catch (err) {
            if (err.code == 11000) {
                throw new common_1.ForbiddenException('User with this email already exists');
            }
            throw new common_1.HttpException('Something went wrong', err);
        }
    }
    async findByObjID(id) {
        try {
            const user = await this.userModel.findOne({ _id: id }).lean();
            return user;
        }
        catch (err) {
            if (err.code == 404) {
                throw new common_1.ForbiddenException('User not found');
            }
            throw new common_1.HttpException('Something went wrong', err);
        }
    }
    async findByEmail(email) {
        try {
            const user = await this.userModel.findOne({ email: email }).lean().exec();
            return user;
        }
        catch (err) {
            if (err.code == 404) {
                throw new common_1.ForbiddenException('User not found');
            }
            throw new common_1.HttpException('Something went wrong', err);
        }
    }
    async update(_id, updateUserDto) {
        try {
            const user = await this.userModel.findOne({ _id }).lean().exec();
            return this.userModel.updateOne({ _id }, updateUserDto);
        }
        catch (err) {
            throw new common_1.HttpException('Something went wrong', err);
        }
    }
    async pushMyListRouters(userId, routerId) {
        const user = await this.userModel.findById(userId);
        if (!user) {
            console.log('User not found');
            return;
        }
        await user.routers.push({ time: (0, backup_1.getToday)(), id_router: routerId });
        await user.save();
        return user;
    }
    async popMyListRouters(deliverId, time) {
        const user = await this.userModel.findById(deliverId);
        if (!user) {
            console.log('User not found');
            return;
        }
        user.routers = user.routers.filter((routerdate) => routerdate.time !== time);
        await user.save();
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map