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
exports.RoutersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_service_1 = require("../users/users.service");
const utils_1 = require("../utils");
const schema_1 = require("./schema");
let RoutersService = class RoutersService {
    constructor(routerModel, usersService) {
        this.routerModel = routerModel;
        this.usersService = usersService;
    }
    async create(createRouterDto) {
        const routerExisted = await this.routerModel.findOne({
            deliver: createRouterDto.deliver,
            time: (0, utils_1.getTime)(),
        });
        if (routerExisted) {
            console.log('Router have already existed');
            return;
        }
        const router = await new this.routerModel(createRouterDto);
        await router.save();
        return router;
    }
    async update(updateRouterDto, user_id) {
        const thisDay = (0, utils_1.getTime)();
        console.log(thisDay);
        const router = await this.routerModel.findOne({
            deliver: user_id,
            time: thisDay,
        });
        console.log(router);
        router.coords = router.coords.concat(updateRouterDto.coords);
        await router.save();
        return router;
    }
    async getByID(_id) {
        return this.routerModel.findOne({ _id: _id });
    }
};
RoutersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Router.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService])
], RoutersService);
exports.RoutersService = RoutersService;
//# sourceMappingURL=router.service.js.map