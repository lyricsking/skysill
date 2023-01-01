"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipdayDriverQueryResolver = exports.shipdayDriverQueryValidator = exports.shipdayDriverQuerySchema = exports.shipdayDriverQueryProperties = exports.shipdayDriverDataResolver = exports.shipdayDriverDataValidator = exports.shipdayDriverDataSchema = exports.shipdayDriverExternalResolver = exports.shipdayDriverResolver = exports.shipdayDriverSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.shipdayDriverSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'ShipdayDriver', additionalProperties: false });
exports.shipdayDriverResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.shipdayDriverExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.shipdayDriverDataSchema = typebox_1.Type.Pick(exports.shipdayDriverSchema, ['text'], {
    $id: 'ShipdayDriverData',
    additionalProperties: false
});
exports.shipdayDriverDataValidator = (0, typebox_1.getDataValidator)(exports.shipdayDriverDataSchema, validators_1.dataValidator);
exports.shipdayDriverDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.shipdayDriverQueryProperties = typebox_1.Type.Pick(exports.shipdayDriverSchema, ['id', 'text'], {
    additionalProperties: false
});
exports.shipdayDriverQuerySchema = (0, typebox_1.querySyntax)(exports.shipdayDriverQueryProperties);
exports.shipdayDriverQueryValidator = (0, typebox_1.getValidator)(exports.shipdayDriverQuerySchema, validators_1.queryValidator);
exports.shipdayDriverQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
