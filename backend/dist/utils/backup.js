"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeNow = exports.getToday = void 0;
function getToday() {
    return new Date(Date.now()).toLocaleString('vi').split(' ')[1];
}
exports.getToday = getToday;
function getTimeNow() {
    return new Date(Date.now()).toLocaleString('vi');
}
exports.getTimeNow = getTimeNow;
//# sourceMappingURL=backup.js.map