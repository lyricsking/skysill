"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productQueryResolver = exports.productQueryValidator = exports.productQuerySchema = exports.productQueryProperties = exports.productDataResolver = exports.productDataValidator = exports.productDataSchema = exports.productExternalResolver = exports.productResolver = exports.productSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
const product_modifier_schema_1 = require("../product_modifier/product_modifier.schema");
// Main data model schema
exports.productSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    shopId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    details: typebox_1.Type.String(),
    price: typebox_1.Type.Number(),
    discount: typebox_1.Type.Number(),
    discountType: typebox_1.Type.Enum({
        flat: 'flat',
        percentage: 'percentage'
    }),
    productModifiers: typebox_1.Type.Optional(typebox_1.Type.Array(product_modifier_schema_1.productModifierSchema))
}, { $id: 'Product', additionalProperties: false });
exports.productResolver = (0, schema_1.resolve)({
    properties: {
        productModifiers: async (_value, product, context) => {
            const pmod = await context.app.service('productModifier').find({
                query: {
                    productId: product.id
                }
            });
            return pmod.data;
        }
    }
});
exports.productExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.productDataSchema = typebox_1.Type.Omit(exports.productSchema, ['id', 'productModifiers'], {
    $id: 'ProductData',
    additionalProperties: false
});
exports.productDataValidator = (0, typebox_1.getDataValidator)(exports.productDataSchema, validators_1.dataValidator);
exports.productDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.productQueryProperties = typebox_1.Type.Omit(exports.productSchema, ['productModifiers'], {
    additionalProperties: false
});
exports.productQuerySchema = (0, typebox_1.querySyntax)(exports.productQueryProperties);
exports.productQueryValidator = (0, typebox_1.getValidator)(exports.productQuerySchema, validators_1.queryValidator);
exports.productQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
