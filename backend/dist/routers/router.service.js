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
const backup_1 = require("../utils/backup");
const schema_1 = require("./schema");
let RoutersService = class RoutersService {
    constructor(routerModel, usersService) {
        this.routerModel = routerModel;
        this.usersService = usersService;
    }
    async create(createRouterDto) {
        console.log(`Creating router by deliver ${createRouterDto.deliverId}`);
        const routerExisted = await this.routerModel.findOne({
            deliverId: createRouterDto.deliverId,
            time: (0, backup_1.getToday)(),
        });
        if (routerExisted) {
            console.log('Router have already existed');
            return routerExisted;
        }
        const router = await new this.routerModel(createRouterDto);
        await router.save();
        await this.usersService.pushMyListRouters(createRouterDto.deliverId, router._id);
        return router;
    }
    async updateRouter(updateRouterDto, deliver_id) {
        const router = await this.routerModel.findOne({
            deliverId: deliver_id,
            time: (0, backup_1.getToday)(),
        });
        if (!router) {
        }
        if (updateRouterDto.coord != null && updateRouterDto.time != '') {
            router.coords.push(updateRouterDto.coord);
            router.times.push(updateRouterDto.time);
            router.distanceTraveled = updateRouterDto.distanceTraveled;
        }
        await router.save();
        return router;
    }
    async deleteRouter(id_router) {
        const router = await this.routerModel.findOne({ _id: id_router });
        const user = await this.usersService.popMyListRouters(router.deliverId, router.time);
        const routerDeleted = await this.routerModel.findOneAndDelete({
            _id: id_router,
        });
        if (user && routerDeleted) {
            console.log('da cap nhat dong bo');
        }
        return routerDeleted;
    }
    async getByID(_id) {
        return this.routerModel.findOne({ _id: _id });
    }
    async getLastCoordsTodayDeliver(deliverId) {
        const today = (0, backup_1.getToday)();
        const router = await this.routerModel
            .findOne({
            deliverId: deliverId,
            time: today,
        })
            .lean();
        if (!router) {
            console.error('Could not found router for you today, please try login again');
            return;
        }
        console.log(router.coords[router.coords.length - 1]);
        return router.coords[router.coords.length - 1];
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