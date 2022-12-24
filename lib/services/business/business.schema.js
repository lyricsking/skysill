"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessQueryResolver = exports.businessQueryValidator = exports.businessQuerySchema = exports.businessQueryProperties = exports.businessDataResolver = exports.businessDataValidator = exports.businessDataSchema = exports.businessExternalResolver = exports.businessResolver = exports.businessSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.businessSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    ownerId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    contactName: typebox_1.Type.String(),
    contactPhone: typebox_1.Type.String(),
    contactEmail: typebox_1.Type.String(),
    categories: typebox_1.Type.String(),
    tags: typebox_1.Type.String()
}, { $id: 'Business', additionalProperties: false });
exports.businessResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.businessExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.businessDataSchema = typebox_1.Type.Omit(exports.businessSchema, ['id'], {
    $id: 'BusinessData',
    additionalProperties: false
});
exports.businessDataValidator = (0, typebox_1.getDataValidator)(exports.businessDataSchema, validators_1.dataValidator);
exports.businessDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.businessQueryProperties = typebox_1.Type.Omit(exports.businessSchema, [], {
    additionalProperties: false
});
exports.businessQuerySchema = (0, typebox_1.querySyntax)(exports.businessQueryProperties);
exports.businessQueryValidator = (0, typebox_1.getValidator)(exports.businessQuerySchema, validators_1.queryValidator);
exports.businessQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
