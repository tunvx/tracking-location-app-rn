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
exports.RoutersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const response_data_1 = require("../utils/response-data");
const router_service_1 = require("./router.service");
const dto_1 = require("./dto");
let RoutersController = class RoutersController {
    constructor(routersService) {
        this.routersService = routersService;
    }
    async create(request, createRouterDto) {
        const { _id } = request.user;
        console.log(`CreatingRouter ${_id}`);
        createRouterDto.deliverId = _id;
        return this.routersService.create(createRouterDto);
    }
    async get(req, routerId) {
        const { _id } = req.user;
        return this.routersService.getByID(routerId);
    }
    async getLastCoords(req) {
        const { _id } = req.user;
        console.log('ahaha');
        console.log(_id);
        return this.routersService.getLastCoordsTodayDeliver(_id);
    }
    async update(request, updateRouterDto) {
        const { _id } = request.user;
        await this.routersService.updateRouter(updateRouterDto, _id);
        return new response_data_1.default(true, { message: 'Update coords list successfully' }, null);
    }
    async delete(request, routerId) {
        const { _id } = request.user;
        await this.routersService.deleteRouter(routerId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new router',
        description: 'Create a new router',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Create a new router successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Create a new router failed' }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateRouterDto]),
    __metadata("design:returntype", Promise)
], RoutersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get router by ID',
        description: 'Get router by ID',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Get router by ID successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Get router failed' }),
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RoutersController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Deliver get last coordinates today',
        description: 'Deliver get last coordinates today',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Deliver get last coordinates today successfully',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Deliver get last coordinates today failed',
    }),
    (0, common_1.Get)('/get-last-coordinates'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoutersController.prototype, "getLastCoords", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Update router',
        description: 'Update router',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Update array coords successfully',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Update array coords failed',
    }),
    (0, common_1.Patch)('/deliver-update'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.UpdateRouterDto]),
    __metadata("design:returntype", Promise)
], RoutersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete router',
        description: 'Delete router',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Delete router successfully',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Delete router failed',
    }),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RoutersController.prototype, "delete", null);
RoutersController = __decorate([
    (0, swagger_1.ApiTags)('Routers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Permission denied' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('routers'),
    __metadata("design:paramtypes", [router_service_1.RoutersService])
], RoutersController);
exports.RoutersController = RoutersController;
//# sourceMappingURL=router.controller.js.map