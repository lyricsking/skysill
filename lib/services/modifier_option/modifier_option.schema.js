"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifierOptionQueryResolver = exports.modifierOptionQueryValidator = exports.modifierOptionQuerySchema = exports.modifierOptionQueryProperties = exports.modifierOptionDataResolver = exports.modifierOptionDataValidator = exports.modifierOptionDataSchema = exports.modifierOptionExternalResolver = exports.modifierOptionResolver = exports.modifierOptionSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.modifierOptionSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    modifierId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    price: typebox_1.Type.Number(),
}, { $id: 'ModifierOption', additionalProperties: false });
exports.modifierOptionResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.modifierOptionExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.modifierOptionDataSchema = typebox_1.Type.Omit(exports.modifierOptionSchema, ['id'], {
    $id: 'ModifierOptionData',
    additionalProperties: false
});
exports.modifierOptionDataValidator = (0, typebox_1.getDataValidator)(exports.modifierOptionDataSchema, validators_1.dataValidator);
exports.modifierOptionDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.modifierOptionQueryProperties = exports.modifierOptionSchema;
exports.modifierOptionQuerySchema = (0, typebox_1.querySyntax)(exports.modifierOptionQueryProperties);
exports.modifierOptionQueryValidator = (0, typebox_1.getValidator)(exports.modifierOptionQuerySchema, validators_1.queryValidator);
exports.modifierOptionQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
