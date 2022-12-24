"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineitemQueryResolver = exports.lineitemQueryValidator = exports.lineitemQuerySchema = exports.lineitemQueryProperties = exports.lineitemDataResolver = exports.lineitemDataValidator = exports.lineitemDataSchema = exports.lineitemExternalResolver = exports.lineitemResolver = exports.lineitemSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.lineitemSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    productId: typebox_1.Type.String(),
    orderId: typebox_1.Type.String(),
    optionsId: typebox_1.Type.Array(typebox_1.Type.String()),
    price: typebox_1.Type.Number(),
    discount: typebox_1.Type.Number(),
    finalItemPrice: typebox_1.Type.Number(),
    quantity: typebox_1.Type.Number(),
    finalPrice: typebox_1.Type.Number(),
}, { $id: 'Lineitem', additionalProperties: false });
exports.lineitemResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.lineitemExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
const c = typebox_1.Type.Pick(exports.lineitemSchema, ['productId', 'optionsId', 'quantity']);
// Schema for creating new entries
exports.lineitemDataSchema = typebox_1.Type.Object({
    ...c.properties,
    shopId: typebox_1.Type.String(),
    shopperId: typebox_1.Type.String()
}, { $id: 'LineitemData', additionalProperties: false });
exports.lineitemDataValidator = (0, typebox_1.getDataValidator)(exports.lineitemDataSchema, validators_1.dataValidator);
exports.lineitemDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.lineitemQueryProperties = typebox_1.Type.Omit(exports.lineitemSchema, [], {
    additionalProperties: false
});
exports.lineitemQuerySchema = (0, typebox_1.querySyntax)(exports.lineitemQueryProperties);
exports.lineitemQueryValidator = (0, typebox_1.getValidator)(exports.lineitemQuerySchema, validators_1.queryValidator);
exports.lineitemQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
