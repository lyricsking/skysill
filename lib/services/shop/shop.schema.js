"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopQueryResolver = exports.shopQueryValidator = exports.shopQuerySchema = exports.shopQueryProperties = exports.shopDataResolver = exports.shopDataValidator = exports.shopDataSchema = exports.shopExternalResolver = exports.shopResolver = exports.shopSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
const business_schema_1 = require("../business/business.schema");
// Main data model schema
exports.shopSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    businessId: typebox_1.Type.String(),
    shopName: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    coordinate: typebox_1.Type.String(),
    category: typebox_1.Type.String(),
    tags: typebox_1.Type.String(),
    business: typebox_1.Type.Optional(typebox_1.Type.Ref(business_schema_1.businessSchema))
}, { $id: 'Shop', additionalProperties: false });
exports.shopResolver = (0, schema_1.resolve)({
    properties: {
        business: async (_value, user, context) => {
            console.log(user);
            // Associate the shop's business.
            const wallet = await context.app.service('business').get(user.businessId);
            return wallet;
        }
    }
});
exports.shopExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.shopDataSchema = typebox_1.Type.Omit(exports.shopSchema, ['id', 'business'], {
    $id: 'ShopData',
    additionalProperties: false
});
exports.shopDataValidator = (0, typebox_1.getDataValidator)(exports.shopDataSchema, validators_1.dataValidator);
exports.shopDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.shopQueryProperties = typebox_1.Type.Omit(exports.shopSchema, ['business'], { additionalProperties: false });
exports.shopQuerySchema = (0, typebox_1.querySyntax)(exports.shopQueryProperties);
exports.shopQueryValidator = (0, typebox_1.getValidator)(exports.shopQuerySchema, validators_1.queryValidator);
exports.shopQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
