"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterDate = exports.getTime = exports.Coords = exports.ResponseData = void 0;
const response_data_1 = require("./response-data");
exports.ResponseData = response_data_1.default;
const coords_1 = require("./coords");
exports.Coords = coords_1.default;
const routerdate_1 = require("./routerdate");
exports.RouterDate = routerdate_1.default;
const backup_1 = require("./backup");
Object.defineProperty(exports, "getTime", { enumerable: true, get: function () { return backup_1.getTimeNow; } });
//# sourceMappingURL=index.js.map