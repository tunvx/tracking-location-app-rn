"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseData {
    constructor(success, payload, error) {
        this.success = success;
        this.payload = payload;
        this.error = error;
    }
    getResponse() {
        return {
            success: this.success,
            payload: this.payload,
            error: this.error,
        };
    }
}
exports.default = ResponseData;
//# sourceMappingURL=response-data.js.map