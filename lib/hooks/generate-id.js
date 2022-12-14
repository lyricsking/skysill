"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
const nanoid_1 = require("nanoid");
const generateId = function (size, prefix = '') {
    return async (context) => {
        console.log(`Running hook generateId on ${context.path}.${context.method}`);
        context.data.id = prefix + (0, nanoid_1.nanoid)(size);
    };
};
exports.generateId = generateId;
