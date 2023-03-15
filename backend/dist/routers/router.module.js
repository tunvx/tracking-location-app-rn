"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const router_service_1 = require("./router.service");
const router_controller_1 = require("./router.controller");
const schema_1 = require("./schema");
const jwt_1 = require("@nestjs/jwt");
const users_module_1 = require("../users/users.module");
let RoutersModule = class RoutersModule {
};
RoutersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.Router.name, schema: schema_1.RouterSchema }]),
            users_module_1.UsersModule,
        ],
        controllers: [router_controller_1.RoutersController],
        providers: [router_service_1.RoutersService, jwt_1.JwtService],
        exports: [router_service_1.RoutersService],
    })
], RoutersModule);
exports.RoutersModule = RoutersModule;
//# sourceMappingURL=router.module.js.map