"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsQueryResolver = exports.productsQueryValidator = exports.productsQuerySchema = exports.productsQueryProperties = exports.productsDataResolver = exports.productsDataValidator = exports.productsDataSchema = exports.productsExternalResolver = exports.productsResolver = exports.productsSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.productsSchema = typebox_1.Type.Object({
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
}, { $id: 'Products', additionalProperties: false });
exports.productsResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.productsExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.productsDataSchema = typebox_1.Type.Omit(exports.productsSchema, ['id'], {
    $id: 'ProductsData',
    additionalProperties: false
});
exports.productsDataValidator = (0, typebox_1.getDataValidator)(exports.productsDataSchema, validators_1.dataValidator);
exports.productsDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.productsQueryProperties = typebox_1.Type.Omit(exports.productsSchema, [], {
    additionalProperties: false
});
exports.productsQuerySchema = (0, typebox_1.querySyntax)(exports.productsQueryProperties);
exports.productsQueryValidator = (0, typebox_1.getValidator)(exports.productsQuerySchema, validators_1.queryValidator);
exports.productsQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
