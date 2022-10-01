"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = exports.validateQuery = void 0;
const lib_1 = require("../../../errors/lib");
const validateQuery = (schema) => async (context, next) => {
    var _a;
    const data = ((_a = context === null || context === void 0 ? void 0 : context.params) === null || _a === void 0 ? void 0 : _a.query) || {};
    try {
        const query = await schema.validate(data);
        context.params = {
            ...context.params,
            query
        };
        if (typeof next === 'function') {
            return next();
        }
    }
    catch (error) {
        throw error.ajv ? new lib_1.BadRequest(error.message, error.errors) : error;
    }
};
exports.validateQuery = validateQuery;
const validateData = (schema) => async (context, next) => {
    const data = context.data;
    try {
        if (Array.isArray(data)) {
            context.data = await Promise.all(data.map((current) => schema.validate(current)));
        }
        else {
            context.data = await schema.validate(data);
        }
    }
    catch (error) {
        throw error.ajv ? new lib_1.BadRequest(error.message, error.errors) : error;
    }
    if (typeof next === 'function') {
        return next();
    }
};
exports.validateData = validateData;
//# sourceMappingURL=validate.js.map