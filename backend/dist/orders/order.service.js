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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let OrdersService = class OrdersService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async create(createMessageDto) {
        const order = await new this.orderModel(createMessageDto);
        await order.save();
        return order;
    }
    async update(updateOrderDto, order_id) {
        const order = await this.orderModel.findOneAndUpdate({ _id: order_id }, updateOrderDto);
        return order;
    }
    async delete(order_id) {
        const order = await this.orderModel.findOneAndDelete({ _id: order_id });
        return order;
    }
    async findAll() {
        return await this.orderModel.find();
    }
    async findOne(order_id) {
        return await this.orderModel.find({ _id: order_id });
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=order.service.js.map