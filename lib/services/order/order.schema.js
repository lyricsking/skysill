"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderQueryResolver = exports.orderQueryValidator = exports.orderQuerySchema = exports.orderQueryProperties = exports.orderPatchResolver = exports.orderPatchValidator = exports.orderPatchSchema = exports.orderDataResolver = exports.orderDataValidator = exports.orderDataSchema = exports.orderExternalResolver = exports.orderResolver = exports.orderSchema = exports.OrderStatus = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const lineitem_1 = require("../lineitem/lineitem");
const shop_schema_1 = require("../shop/shop.schema");
const user_schema_1 = require("../user/user.schema");
exports.OrderStatus = {
    cart: 'cart',
    pending: "pending",
    accepted: "accepted",
    declined: "declined",
    assigned: "assigned",
    awaitingPickup: "awaitingPickup",
    inTransit: "inTransit",
    delivered: "delivered",
    cancelled: "cancelled"
};
// Main data model schema
exports.orderSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    shopId: typebox_1.Type.String(),
    shopperId: typebox_1.Type.String(),
    deliveryId: typebox_1.Type.Optional(typebox_1.Type.String()),
    transactionId: typebox_1.Type.Optional(typebox_1.Type.String()),
    subtotal: typebox_1.Type.Optional(typebox_1.Type.Number()),
    pickupAddress: typebox_1.Type.Optional(typebox_1.Type.String()),
    pickupGeopoint: typebox_1.Type.Optional(typebox_1.Type.String()),
    deliveryAddress: typebox_1.Type.Optional(typebox_1.Type.String()),
    deliveryGeopoint: typebox_1.Type.Optional(typebox_1.Type.String()),
    deliveryFee: typebox_1.Type.Optional(typebox_1.Type.Number()),
    orderStatus: (0, typebox_1.StringEnum)(Object.values(exports.OrderStatus)),
    lineItems: typebox_1.Type.Array(typebox_1.Type.Ref(lineitem_1.lineitemSchema)),
    user: typebox_1.Type.Optional(typebox_1.Type.Ref(user_schema_1.userSchema)),
    shop: typebox_1.Type.Optional(typebox_1.Type.Ref(shop_schema_1.shopSchema)),
}, { $id: 'Order', additionalProperties: false });
exports.orderResolver = (0, schema_1.resolve)({
    properties: {
        lineItems: async (_value, order, context) => {
            return await context.app.service('lineitem').find({
                query: {
                    orderId: order.id
                },
                paginate: false
            });
        },
        user: async (_value, order, context) => {
            return await context.app.service('user').get(order.shopperId);
        },
        shop: async (_value, order, context) => {
            return await context.app.service('shop').get(order.shopId);
        }
    }
});
exports.orderExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.orderDataSchema = typebox_1.Type.Pick(exports.orderSchema, ['shopId', 'shopperId'], {
    $id: 'OrderData',
    additionalProperties: false
});
exports.orderDataValidator = (0, typebox_1.getDataValidator)(exports.orderDataSchema, validators_1.dataValidator);
exports.orderDataResolver = (0, schema_1.resolve)({
    properties: {
        lineItems: async () => undefined
    }
});
// Schema for patching order entries
exports.orderPatchSchema = typebox_1.Type.Pick(exports.orderSchema, ['transactionId', 'pickupAddress', 'pickupGeopoint', 'deliveryAddress', 'deliveryGeopoint', 'orderStatus'], {
    $id: 'OrderPatch', additionalProperties: false
});
exports.orderPatchValidator = (0, typebox_1.getDataValidator)(exports.orderPatchSchema, validators_1.dataValidator);
exports.orderPatchResolver = (0, schema_1.resolve)({
    properties: {
        lineItems: async () => undefined
    }
});
// Schema for allowed query properties
exports.orderQueryProperties = typebox_1.Type.Omit(exports.orderSchema, ['user', 'shop', 'lineItems'], { additionalProperties: false });
exports.orderQuerySchema = (0, typebox_1.querySyntax)(exports.orderQueryProperties);
exports.orderQueryValidator = (0, typebox_1.getValidator)(exports.orderQuerySchema, validators_1.queryValidator);
exports.orderQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
