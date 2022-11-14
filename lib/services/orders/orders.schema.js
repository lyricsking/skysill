"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersQueryResolver = exports.ordersQueryValidator = exports.ordersQuerySchema = exports.ordersQueryProperties = exports.ordersDataResolver = exports.ordersDataValidator = exports.ordersDataSchema = exports.ordersExternalResolver = exports.ordersResolver = exports.ordersSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.ordersSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    shopId: typebox_1.Type.String(),
    shopperId: typebox_1.Type.String(),
    subtotal: typebox_1.Type.Number(),
    deliveryFee: typebox_1.Type.Number(),
    deliveryAddress: typebox_1.Type.String(),
    deliveryGeopoint: typebox_1.Type.String()
}, { $id: 'Orders', additionalProperties: false });
exports.ordersResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.ordersExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.ordersDataSchema = typebox_1.Type.Omit(exports.ordersSchema, ['id'], {
    $id: 'OrdersData',
    additionalProperties: false
});
exports.ordersDataValidator = (0, typebox_1.getDataValidator)(exports.ordersDataSchema, validators_1.dataValidator);
exports.ordersDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.ordersQueryProperties = typebox_1.Type.Omit(exports.ordersSchema, [], { additionalProperties: false });
exports.ordersQuerySchema = (0, typebox_1.querySyntax)(exports.ordersQueryProperties);
exports.ordersQueryValidator = (0, typebox_1.getValidator)(exports.ordersQuerySchema, validators_1.queryValidator);
exports.ordersQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
