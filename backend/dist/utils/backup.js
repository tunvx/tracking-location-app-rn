"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
function getTime() {
    return new Date(Date.now()).toLocaleString('vi').split(' ')[1];
}
exports.getTime = getTime;
//# sourceMappingURL=backup.js.map