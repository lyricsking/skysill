"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCategoryQueryResolver = exports.productCategoryQueryValidator = exports.productCategoryQuerySchema = exports.productCategoryQueryProperties = exports.productCategoryDataResolver = exports.productCategoryDataValidator = exports.productCategoryDataSchema = exports.productCategoryExternalResolver = exports.productCategoryResolver = exports.productCategorySchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.productCategorySchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    businessId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
}, { $id: 'ProductCategory', additionalProperties: false });
exports.productCategoryResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.productCategoryExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.productCategoryDataSchema = typebox_1.Type.Omit(exports.productCategorySchema, ['id'], {
    $id: 'ProductCategoryData',
    additionalProperties: false
});
exports.productCategoryDataValidator = (0, typebox_1.getDataValidator)(exports.productCategoryDataSchema, validators_1.dataValidator);
exports.productCategoryDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.productCategoryQueryProperties = typebox_1.Type.Omit(exports.productCategorySchema, [], {
    additionalProperties: false
});
exports.productCategoryQuerySchema = (0, typebox_1.querySyntax)(exports.productCategoryQueryProperties);
exports.productCategoryQueryValidator = (0, typebox_1.getValidator)(exports.productCategoryQuerySchema, validators_1.queryValidator);
exports.productCategoryQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
