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
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const mongoose_2 = require("mongoose");
const utils_1 = require("../../utils");
let Order = class Order {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", String)
], Order.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "customerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "productName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", utils_1.Coords)
], Order.prototype, "coords", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "note", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "predictTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "deliverId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Order.prototype, "delivered", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "deliveryTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", utils_1.Coords)
], Order.prototype, "deliveryCoordinates", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map