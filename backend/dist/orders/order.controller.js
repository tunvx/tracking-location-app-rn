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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_service_1 = require("./order.service");
const dto_1 = require("./dto");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async createNewOrder(req, createOrderDto) {
        const order = this.ordersService.create(createOrderDto);
        return order;
    }
    async getAllOrders(req) {
        const orders = this.ordersService.findAll();
        return orders;
    }
    async getOneOrder(req, orderId) {
        const orders = this.ordersService.findOne(orderId);
        return orders;
    }
    async updateInfoOrder(orderId, req, updateOrderDto) {
        const updatedOrder = await this.ordersService.update(updateOrderDto, orderId);
        console.log(updateOrderDto);
        return updatedOrder;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new order',
        description: 'Create a new order',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Create a new order successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Create a new order failed' }),
    (0, common_1.Post)('orders/create'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createNewOrder", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get all orders',
        description: 'Get all orders',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Get all orders successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Get all orders failed' }),
    (0, common_1.Get)('orders/all'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getAllOrders", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get a order',
        description: 'Get a order',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Get a order successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Get a order failed' }),
    (0, common_1.Get)('orders/get/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOneOrder", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Updates the order content by ID',
        description: 'Updates the order content by ID',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Update order content successfully',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Update order content failed',
    }),
    (0, common_1.Patch)('orders/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, dto_1.UpdateOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateInfoOrder", null);
OrdersController = __decorate([
    (0, swagger_1.ApiTags)('Orders'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [order_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=order.controller.js.map