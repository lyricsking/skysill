"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsQueryResolver = exports.transactionsQueryValidator = exports.transactionsQuerySchema = exports.transactionsQueryProperties = exports.transactionsDataResolver = exports.transactionsDataValidator = exports.transactionsDataSchema = exports.transactionsExternalResolver = exports.transactionsResolver = exports.transactionsSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.transactionsSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    walletId: typebox_1.Type.String(),
    amount: typebox_1.Type.String(),
    narrations: typebox_1.Type.String()
}, { $id: 'Transactions', additionalProperties: false });
exports.transactionsResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.transactionsExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.transactionsDataSchema = typebox_1.Type.Omit(exports.transactionsSchema, ['id'], {
    $id: 'TransactionsData',
    additionalProperties: false
});
exports.transactionsDataValidator = (0, typebox_1.getDataValidator)(exports.transactionsDataSchema, validators_1.dataValidator);
exports.transactionsDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.transactionsQueryProperties = typebox_1.Type.Object(exports.transactionsSchema.properties, {
    additionalProperties: false
});
exports.transactionsQuerySchema = (0, typebox_1.querySyntax)(exports.transactionsQueryProperties);
exports.transactionsQueryValidator = (0, typebox_1.getValidator)(exports.transactionsQuerySchema, validators_1.queryValidator);
exports.transactionsQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
