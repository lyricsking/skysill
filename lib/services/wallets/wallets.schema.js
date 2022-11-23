"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletsQueryResolver = exports.walletsQueryValidator = exports.walletsQuerySchema = exports.walletsQueryProperties = exports.walletsDataResolver = exports.walletsDataValidator = exports.walletsDataSchema = exports.walletsExternalResolver = exports.walletsResolver = exports.walletsSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.walletsSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    walletableId: typebox_1.Type.String(),
    walletableType: typebox_1.Type.String(),
    balance: typebox_1.Type.Number()
}, { $id: 'Wallets', additionalProperties: false });
exports.walletsResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.walletsExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.walletsDataSchema = typebox_1.Type.Omit(exports.walletsSchema, ['id'], {
    $id: 'WalletsData',
    additionalProperties: false
});
exports.walletsDataValidator = (0, typebox_1.getDataValidator)(exports.walletsDataSchema, validators_1.dataValidator);
exports.walletsDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.walletsQueryProperties = typebox_1.Type.Omit(exports.walletsSchema, ['balance'], {
    additionalProperties: false
});
exports.walletsQuerySchema = (0, typebox_1.querySyntax)(exports.walletsQueryProperties);
exports.walletsQueryValidator = (0, typebox_1.getValidator)(exports.walletsQuerySchema, validators_1.queryValidator);
exports.walletsQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
