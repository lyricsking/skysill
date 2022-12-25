"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipdayQueryResolver = exports.shipdayQueryValidator = exports.shipdayQuerySchema = exports.shipdayQueryProperties = exports.shipdayDataResolver = exports.shipdayDataValidator = exports.shipdayDataSchema = exports.shipdayExternalResolver = exports.shipdayResolver = exports.shipdaySchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.shipdaySchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Shipday', additionalProperties: false });
exports.shipdayResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.shipdayExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.shipdayDataSchema = typebox_1.Type.Pick(exports.shipdaySchema, ['text'], {
    $id: 'ShipdayData',
    additionalProperties: false
});
exports.shipdayDataValidator = (0, typebox_1.getDataValidator)(exports.shipdayDataSchema, validators_1.dataValidator);
exports.shipdayDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.shipdayQueryProperties = typebox_1.Type.Pick(exports.shipdaySchema, ['id', 'text'], {
    additionalProperties: false
});
exports.shipdayQuerySchema = (0, typebox_1.querySyntax)(exports.shipdayQueryProperties);
exports.shipdayQueryValidator = (0, typebox_1.getValidator)(exports.shipdayQuerySchema, validators_1.queryValidator);
exports.shipdayQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
