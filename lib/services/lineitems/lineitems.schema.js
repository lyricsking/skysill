"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineitemsQueryResolver = exports.lineitemsQueryValidator = exports.lineitemsQuerySchema = exports.lineitemsQueryProperties = exports.lineitemsDataResolver = exports.lineitemsDataValidator = exports.lineitemsDataSchema = exports.lineitemsExternalResolver = exports.lineitemsResolver = exports.lineitemsSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.lineitemsSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    productId: typebox_1.Type.String(),
    price: typebox_1.Type.Number(),
    discount: typebox_1.Type.Number(),
    finalItemPrice: typebox_1.Type.Number(),
    quantity: typebox_1.Type.Number(),
    finalPrice: typebox_1.Type.Number()
}, { $id: 'Lineitems', additionalProperties: false });
exports.lineitemsResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.lineitemsExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.lineitemsDataSchema = typebox_1.Type.Omit(exports.lineitemsSchema, ['id'], {
    $id: 'LineitemsData',
    additionalProperties: false
});
exports.lineitemsDataValidator = (0, typebox_1.getDataValidator)(exports.lineitemsDataSchema, validators_1.dataValidator);
exports.lineitemsDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.lineitemsQueryProperties = typebox_1.Type.Omit(exports.lineitemsSchema, [], {
    additionalProperties: false
});
exports.lineitemsQuerySchema = (0, typebox_1.querySyntax)(exports.lineitemsQueryProperties);
exports.lineitemsQueryValidator = (0, typebox_1.getValidator)(exports.lineitemsQuerySchema, validators_1.queryValidator);
exports.lineitemsQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
