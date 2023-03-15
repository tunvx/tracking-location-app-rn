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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const dto_1 = require("./dto");
const utils_1 = require("../utils");
const order_service_1 = require("./order.service");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async create(request, createOrderDto) {
        const { _id } = request.user;
        await this.ordersService.create(createOrderDto);
        return new utils_1.ResponseData(true, { message: 'Create a new order successfully' }, null);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Create a order channel',
        description: 'Create a order channel',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Create a new order successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Create a new order failed' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof dto_1.CreateOrderDto !== "undefined" && dto_1.CreateOrderDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    (0, swagger_1.ApiTags)('Orders'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Permission denied' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [order_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=order.controller.js.map