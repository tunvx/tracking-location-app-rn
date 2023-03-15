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
exports.RouterSchema = exports.Router = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const mongoose_2 = require("mongoose");
const utils_1 = require("../../utils");
let Router = class Router {
    constructor() {
        this.coords = [];
    }
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", String)
], Router.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }),
    __metadata("design:type", String)
], Router.prototype, "deliver", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: (0, utils_1.getTime)(),
    }),
    __metadata("design:type", String)
], Router.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Array)
], Router.prototype, "coords", void 0);
Router = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Router);
exports.Router = Router;
exports.RouterSchema = mongoose_1.SchemaFactory.createForClass(Router);
//# sourceMappingURL=router.schema.js.map