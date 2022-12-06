"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifierQueryResolver = exports.modifierQueryValidator = exports.modifierQuerySchema = exports.modifierQueryProperties = exports.modifierDataResolver = exports.modifierDataValidator = exports.modifierDataSchema = exports.modifierExternalResolver = exports.modifierResolver = exports.modifierSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.modifierSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    businessId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    minSelectable: typebox_1.Type.Integer(),
    maxSelectable: typebox_1.Type.Integer(),
    noFree: typebox_1.Type.Integer(),
}, { $id: 'Modifier', additionalProperties: false });
exports.modifierResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.modifierExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.modifierDataSchema = typebox_1.Type.Omit(exports.modifierSchema, ['id'], {
    $id: 'ModifierData',
    additionalProperties: false
});
exports.modifierDataValidator = (0, typebox_1.getDataValidator)(exports.modifierDataSchema, validators_1.dataValidator);
exports.modifierDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.modifierQueryProperties = typebox_1.Type.Object(exports.modifierSchema.properties, {
    additionalProperties: false
});
exports.modifierQuerySchema = (0, typebox_1.querySyntax)(exports.modifierQueryProperties);
exports.modifierQueryValidator = (0, typebox_1.getValidator)(exports.modifierQuerySchema, validators_1.queryValidator);
exports.modifierQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
