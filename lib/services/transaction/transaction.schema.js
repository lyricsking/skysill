"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionQueryResolver = exports.transactionQueryValidator = exports.transactionQuerySchema = exports.transactionQueryProperties = exports.transactionDataResolver = exports.transactionDataValidator = exports.transactionDataSchema = exports.transactionExternalResolver = exports.transactionResolver = exports.transactionSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.transactionSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    walletId: typebox_1.Type.String(),
    amount: typebox_1.Type.Number(),
    pend: typebox_1.Type.Boolean(),
    narrations: typebox_1.Type.String()
}, { $id: 'Transaction', additionalProperties: false });
exports.transactionResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.transactionExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.transactionDataSchema = typebox_1.Type.Omit(exports.transactionSchema, ['id'], {
    $id: 'TransactionData',
    additionalProperties: false
});
exports.transactionDataValidator = (0, typebox_1.getDataValidator)(exports.transactionDataSchema, validators_1.dataValidator);
exports.transactionDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.transactionQueryProperties = typebox_1.Type.Object(exports.transactionSchema.properties, {
    additionalProperties: false
});
exports.transactionQuerySchema = (0, typebox_1.querySyntax)(exports.transactionQueryProperties);
exports.transactionQueryValidator = (0, typebox_1.getValidator)(exports.transactionQuerySchema, validators_1.queryValidator);
exports.transactionQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
