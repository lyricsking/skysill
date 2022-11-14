"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopsQueryResolver = exports.shopsQueryValidator = exports.shopsQuerySchema = exports.shopsQueryProperties = exports.shopsDataResolver = exports.shopsDataValidator = exports.shopsDataSchema = exports.shopsExternalResolver = exports.shopsResolver = exports.shopsSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.shopsSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    businessId: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    coordinate: typebox_1.Type.String()
}, { $id: 'Shops', additionalProperties: false });
exports.shopsResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.shopsExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.shopsDataSchema = typebox_1.Type.Omit(exports.shopsSchema, ['id'], {
    $id: 'ShopsData',
    additionalProperties: false
});
exports.shopsDataValidator = (0, typebox_1.getDataValidator)(exports.shopsDataSchema, validators_1.dataValidator);
exports.shopsDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.shopsQueryProperties = typebox_1.Type.Omit(exports.shopsSchema, [], { additionalProperties: false });
exports.shopsQuerySchema = (0, typebox_1.querySyntax)(exports.shopsQueryProperties);
exports.shopsQueryValidator = (0, typebox_1.getValidator)(exports.shopsQuerySchema, validators_1.queryValidator);
exports.shopsQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
