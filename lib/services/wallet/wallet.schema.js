"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletQueryResolver = exports.walletQueryValidator = exports.walletQuerySchema = exports.walletQueryProperties = exports.walletDataResolver = exports.walletDataValidator = exports.walletDataSchema = exports.walletExternalResolver = exports.walletResolver = exports.walletSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.walletSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    owner: typebox_1.Type.String(),
    ownerId: typebox_1.Type.String(),
    balance: typebox_1.Type.Number()
}, { $id: 'Wallet', additionalProperties: false });
exports.walletResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.walletExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.walletDataSchema = typebox_1.Type.Omit(exports.walletSchema, ['id'], {
    $id: 'WalletData',
    additionalProperties: false
});
exports.walletDataValidator = (0, typebox_1.getDataValidator)(exports.walletDataSchema, validators_1.dataValidator);
exports.walletDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.walletQueryProperties = typebox_1.Type.Omit(exports.walletSchema, ['balance'], {
    additionalProperties: false
});
exports.walletQuerySchema = (0, typebox_1.querySyntax)(exports.walletQueryProperties);
exports.walletQueryValidator = (0, typebox_1.getValidator)(exports.walletQuerySchema, validators_1.queryValidator);
exports.walletQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
