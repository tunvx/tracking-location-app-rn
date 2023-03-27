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
exports.CreateOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const utils_1 = require("../../utils");
class CreateOrderDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        default: { latitude: -1, longitude: -1 },
    }),
    __metadata("design:type", utils_1.Coords)
], CreateOrderDto.prototype, "coords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '',
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "note", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '',
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "predictTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: null,
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "deliverId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        default: false,
    }),
    __metadata("design:type", Boolean)
], CreateOrderDto.prototype, "delivered", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '',
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "deliveryTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: { latitude: -1, longitude: -1 },
    }),
    __metadata("design:type", utils_1.Coords)
], CreateOrderDto.prototype, "deliveryCoordinates", void 0);
exports.CreateOrderDto = CreateOrderDto;
//# sourceMappingURL=create-order.dto.js.map