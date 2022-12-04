"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderQueryResolver = exports.orderQueryValidator = exports.orderQuerySchema = exports.orderQueryProperties = exports.orderDataResolver = exports.orderDataValidator = exports.orderDataSchema = exports.orderExternalResolver = exports.orderResolver = exports.orderSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.orderSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    shopId: typebox_1.Type.String(),
    shopperId: typebox_1.Type.String(),
    subtotal: typebox_1.Type.Number(),
    deliveryFee: typebox_1.Type.Number(),
    deliveryAddress: typebox_1.Type.String(),
    deliveryGeopoint: typebox_1.Type.String()
}, { $id: 'Order', additionalProperties: false });
exports.orderResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.orderExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.orderDataSchema = typebox_1.Type.Omit(exports.orderSchema, ['id'], {
    $id: 'OrderData',
    additionalProperties: false
});
exports.orderDataValidator = (0, typebox_1.getDataValidator)(exports.orderDataSchema, validators_1.dataValidator);
exports.orderDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.orderQueryProperties = typebox_1.Type.Omit(exports.orderSchema, [], { additionalProperties: false });
exports.orderQuerySchema = (0, typebox_1.querySyntax)(exports.orderQueryProperties);
exports.orderQueryValidator = (0, typebox_1.getValidator)(exports.orderQuerySchema, validators_1.queryValidator);
exports.orderQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
