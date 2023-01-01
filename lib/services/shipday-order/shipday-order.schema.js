"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipdayOrderQueryResolver = exports.shipdayOrderQueryValidator = exports.shipdayOrderQuerySchema = exports.shipdayOrderQueryProperties = exports.shipdayOrderPatchResolver = exports.shipdayOrderPatchValidator = exports.shipdayOrderPatchSchema = exports.shipdayOrderDataResolver = exports.shipdayOrderDataValidator = exports.shipdayOrderDataSchema = exports.shipdayOrderExternalResolver = exports.shipdayOrderResolver = exports.shipdayOrderSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const OrderState = [
    "ACTIVE",
    "NOT_ASSIGNED",
    "NOT_ACCEPTED",
    "NOT_STARTED_YET",
    "STARTED",
    "PICKED_UP",
    "READY_TO_DELIVER",
    "ALREADY_DELIVERED",
    "FAILED_DELIVERY",
    "INCOMPLETE"
];
const customerSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    address: typebox_1.Type.String(),
    phoneNumber: typebox_1.Type.String(),
    emailAddress: typebox_1.Type.String(),
    latitude: typebox_1.Type.Number(),
    longitude: typebox_1.Type.Number()
});
const vendorSchema = typebox_1.Type.Object({
    "id": typebox_1.Type.Number(),
    "name": typebox_1.Type.String(),
    "address": typebox_1.Type.String(),
    "phoneNumber": typebox_1.Type.String(),
    "latitude": typebox_1.Type.Number(),
    "longitude": typebox_1.Type.Number()
});
const assignedCarrierSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Integer(),
    "personalId": typebox_1.Type.Integer(),
    "name": typebox_1.Type.String(),
    "codeName": typebox_1.Type.String(),
    "phoneNumber": typebox_1.Type.String(),
    "companyId": typebox_1.Type.Integer(),
    "areaId": typebox_1.Type.Integer(),
    "isOnShift": typebox_1.Type.Boolean(),
    "email": typebox_1.Type.String(),
    "carrierPhoto": typebox_1.Type.String(),
    "isActive": typebox_1.Type.Boolean()
});
const activityLogSchema = typebox_1.Type.Object({
    placementTime: typebox_1.Type.String({ format: 'date-time' }),
    "expectedPickupTime": typebox_1.Type.String({ format: 'time' }),
    "expectedDeliveryDate": typebox_1.Type.String({ format: 'date' }),
    "expectedDeliveryTime": typebox_1.Type.String({ format: 'time' }),
    "assignedTime": typebox_1.Type.String({ format: 'date-time' }),
    "startTime": typebox_1.Type.String({ format: 'date-time' }),
    "pickedUpTime": typebox_1.Type.String({ format: 'date-time' }),
    "arrivedTime": typebox_1.Type.String({ format: 'date-time' }),
    "deliveryTime": typebox_1.Type.String({ format: 'date-time' })
});
const costingSchema = typebox_1.Type.Object({
    totalCost: typebox_1.Type.String({ format: 'double' }),
    deliveryFee: typebox_1.Type.String({ format: 'double' }),
    "tip": typebox_1.Type.String({ format: 'double' }),
    "discountAmount": typebox_1.Type.String({ format: 'double' }),
    "tax": typebox_1.Type.String({ format: 'double' }),
    "cashTip": typebox_1.Type.String({ format: 'double' })
});
const orderItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    quantity: typebox_1.Type.String(),
    unit: typebox_1.Type.String({ format: 'int32' }),
    addOns: typebox_1.Type.Array(typebox_1.Type.String()),
    details: typebox_1.Type.String()
});
const orderStatusSchema = typebox_1.Type.Object({
    imcomplete: typebox_1.Type.Boolean(),
    accepted: typebox_1.Type.Boolean(),
    orderState: (0, typebox_1.StringEnum)(Object.values(OrderState))
});
// Main data model schema
exports.shipdayOrderSchema = typebox_1.Type.Object({
    orderId: typebox_1.Type.Number(),
    orderNumber: typebox_1.Type.String(),
    companyId: typebox_1.Type.String(),
    areaId: typebox_1.Type.String(),
    customer: customerSchema,
    restaurant: vendorSchema,
    assignedCarrier: assignedCarrierSchema,
    distance: typebox_1.Type.String({ format: 'double' }),
    activityLog: activityLogSchema,
    costing: costingSchema,
    orderItems: typebox_1.Type.Array(orderItemSchema),
    assignedCarrierId: typebox_1.Type.String({ format: 'int32' }),
    orderStatus: orderStatusSchema,
    trackingLink: typebox_1.Type.String({ format: 'uri' }),
    feedback: typebox_1.Type.String(),
    schedule: typebox_1.Type.Boolean(),
    parentId: typebox_1.Type.String({ format: 'int32' }),
    etaTime: typebox_1.Type.String({ format: 'time' }),
    deliveryInstruction: typebox_1.Type.String(),
}, { $id: 'ShipdayOrder', additionalProperties: false });
exports.shipdayOrderResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.shipdayOrderExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.shipdayOrderDataSchema = typebox_1.Type.Object({
    orderNumber: typebox_1.Type.String(),
    customerName: typebox_1.Type.String(),
    customerAddress: typebox_1.Type.String(),
    customerEmail: typebox_1.Type.String(),
    customerPhoneNumber: typebox_1.Type.String(),
    restaurantName: typebox_1.Type.String(),
    restaurantAddress: typebox_1.Type.String(),
    restaurantPhoneNumber: typebox_1.Type.String(),
    expectedDeliveryDate: typebox_1.Type.String({ format: 'date' }),
    expectedPickupTime: typebox_1.Type.String({ format: 'time' }),
    expectedDeliveryTime: typebox_1.Type.String({ format: 'time' }),
    pickupLatitude: typebox_1.Type.Number(),
    pickupLongitude: typebox_1.Type.Number(),
    deliveryLatitude: typebox_1.Type.Number(),
    deliveryLongitude: typebox_1.Type.Number(),
    orderItem: typebox_1.Type.Array(orderItemSchema),
    tips: typebox_1.Type.Number(),
    tax: typebox_1.Type.Number(),
    discountAmount: typebox_1.Type.Number(),
    deliveryFee: typebox_1.Type.Number(),
    totalOrderCost: typebox_1.Type.Number(),
    deliveryInstruction: typebox_1.Type.String(),
    orderSource: typebox_1.Type.String(),
    additionalId: typebox_1.Type.String(),
    clientRestaurantId: typebox_1.Type.Number(),
}, {
    $id: 'ShipdayOrderData',
    additionalProperties: false
});
exports.shipdayOrderDataValidator = (0, typebox_1.getDataValidator)(exports.shipdayOrderDataSchema, validators_1.dataValidator);
exports.shipdayOrderDataResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.shipdayOrderPatchSchema = typebox_1.Type.Object({
    orderId: typebox_1.Type.Number(),
    ...exports.shipdayOrderDataSchema.properties
}, {
    $id: 'ShipdayOrderPatch',
    additionalProperties: false
});
exports.shipdayOrderPatchValidator = (0, typebox_1.getDataValidator)(exports.shipdayOrderPatchSchema, validators_1.dataValidator);
exports.shipdayOrderPatchResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.shipdayOrderQueryProperties = typebox_1.Type.Omit(exports.shipdayOrderSchema, [], {
    additionalProperties: false
});
exports.shipdayOrderQuerySchema = (0, typebox_1.querySyntax)(exports.shipdayOrderQueryProperties);
exports.shipdayOrderQueryValidator = (0, typebox_1.getValidator)(exports.shipdayOrderQuerySchema, validators_1.queryValidator);
exports.shipdayOrderQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
