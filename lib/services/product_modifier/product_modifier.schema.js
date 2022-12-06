"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModifierQueryResolver = exports.productModifierQueryValidator = exports.productModifierQuerySchema = exports.productModifierQueryProperties = exports.productModifierDataResolver = exports.productModifierDataValidator = exports.productModifierDataSchema = exports.productModifierExternalResolver = exports.productModifierResolver = exports.productModifierSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.productModifierSchema = typebox_1.Type.Object({
    productId: typebox_1.Type.String(),
    modifierId: typebox_1.Type.String(),
    //product: Type.Optional(Type.Ref(productSchema)),
    //modifier: Type.Optional(Type.Ref(modifierSchema))
}, { $id: 'ProductModifier', additionalProperties: false });
exports.productModifierResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.productModifierExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.productModifierDataSchema = typebox_1.Type.Pick(exports.productModifierSchema, ['productId', 'modifierId'], {
    $id: 'ProductModifierData',
    additionalProperties: false
});
exports.productModifierDataValidator = (0, typebox_1.getDataValidator)(exports.productModifierDataSchema, validators_1.dataValidator);
exports.productModifierDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.productModifierQueryProperties = typebox_1.Type.Pick(exports.productModifierSchema, ['productId', 'modifierId'], {
    additionalProperties: false
});
exports.productModifierQuerySchema = (0, typebox_1.querySyntax)(exports.productModifierQueryProperties);
exports.productModifierQueryValidator = (0, typebox_1.getValidator)(exports.productModifierQuerySchema, validators_1.queryValidator);
exports.productModifierQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
