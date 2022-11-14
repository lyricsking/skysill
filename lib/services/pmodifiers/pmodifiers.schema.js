"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pmodifiersQueryResolver = exports.pmodifiersQueryValidator = exports.pmodifiersQuerySchema = exports.pmodifiersQueryProperties = exports.pmodifiersDataResolver = exports.pmodifiersDataValidator = exports.pmodifiersDataSchema = exports.pmodifiersExternalResolver = exports.pmodifiersResolver = exports.pmodifiersSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.pmodifiersSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    businessId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    minSelectable: typebox_1.Type.Integer(),
    maxSelectable: typebox_1.Type.Integer(),
    noFree: typebox_1.Type.Integer()
}, { $id: 'Pmodifiers', additionalProperties: false });
exports.pmodifiersResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.pmodifiersExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.pmodifiersDataSchema = typebox_1.Type.Omit(exports.pmodifiersSchema, ['id'], {
    $id: 'PmodifiersData',
    additionalProperties: false
});
exports.pmodifiersDataValidator = (0, typebox_1.getDataValidator)(exports.pmodifiersDataSchema, validators_1.dataValidator);
exports.pmodifiersDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.pmodifiersQueryProperties = typebox_1.Type.Object(exports.pmodifiersSchema.properties, {
    additionalProperties: false
});
exports.pmodifiersQuerySchema = (0, typebox_1.querySyntax)(exports.pmodifiersQueryProperties);
exports.pmodifiersQueryValidator = (0, typebox_1.getValidator)(exports.pmodifiersQuerySchema, validators_1.queryValidator);
exports.pmodifiersQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
