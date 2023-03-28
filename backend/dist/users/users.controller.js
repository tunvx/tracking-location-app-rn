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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const users_service_1 = require("./users.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const utils_1 = require("../utils");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async me(request) {
        const { _id } = request.user;
        console.log(`User retrieved infomation of order ${_id}`);
        const user = await this.usersService.findByObjID(_id);
        const { hashedPassword } = user, userInfo = __rest(user, ["hashedPassword"]);
        return userInfo;
    }
    async getByObjId(id) {
        const user = await this.usersService.findByObjID(id);
        if (!user) {
            throw new common_1.NotFoundException("The user's id doesn't exist");
        }
        return user;
    }
    async update(request, updateUserDto) {
        const { _id } = request.user;
        await this.usersService.update(_id, updateUserDto);
        return new utils_1.ResponseData(true, { message: 'Successfully updated information' }, null);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Retrieve all the information of the logged in user',
        description: 'Retrieve all the information of the logged in user',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Retrieve all your information successfully',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Retrieval of all your information failed',
    }),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "me", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Retrieve all public information of users by ID',
        description: 'Retrieve all public information of users by ID',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Retrieve all public information of users by ID successfully',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Retrieve all public information of users by ID failed',
    }),
    (0, common_1.Get)('u/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getByObjId", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Update logged in user information',
        description: 'Update logged in user information',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Update logged in user information successfully',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Update logged in user information failed',
    }),
    (0, common_1.Patch)('me'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Permission denied' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map