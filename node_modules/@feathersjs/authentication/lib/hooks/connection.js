"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const omit_1 = __importDefault(require("lodash/omit"));
exports.default = (event) => async (context, next) => {
    await next();
    const { result, params: { connection } } = context;
    if (connection) {
        const service = context.service;
        Object.assign(connection, (0, omit_1.default)(result, 'accessToken', 'authentication'));
        await service.handleConnection(event, connection, result);
    }
};
//# sourceMappingURL=connection.js.map