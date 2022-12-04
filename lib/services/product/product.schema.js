"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productQueryResolver = exports.productQueryValidator = exports.productQuerySchema = exports.productQueryProperties = exports.productDataResolver = exports.productDataValidator = exports.productDataSchema = exports.productExternalResolver = exports.productResolver = exports.productSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.productSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    shopId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    details: typebox_1.Type.String(),
    price: typebox_1.Type.Number(),
    discount: typebox_1.Type.Number(),
    discountType: typebox_1.Type.Enum({
        flat: 'flat',
        percentage: 'percentage'
    })
}, { $id: 'Product', additionalProperties: false });
exports.productResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.productExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.productDataSchema = typebox_1.Type.Omit(exports.productSchema, ['id'], {
    $id: 'ProductData',
    additionalProperties: false
});
exports.productDataValidator = (0, typebox_1.getDataValidator)(exports.productDataSchema, validators_1.dataValidator);
exports.productDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.productQueryProperties = typebox_1.Type.Omit(exports.productSchema, [], {
    additionalProperties: false
});
exports.productQuerySchema = (0, typebox_1.querySyntax)(exports.productQueryProperties);
exports.productQueryValidator = (0, typebox_1.getValidator)(exports.productQuerySchema, validators_1.queryValidator);
exports.productQueryResolver = (0, schema_1.resolve)({
    properties: {}
});