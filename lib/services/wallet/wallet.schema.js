"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletQueryResolver = exports.walletQueryValidator = exports.walletQuerySchema = exports.walletQueryProperties = exports.walletPatchResolver = exports.walletPatchValidator = exports.walletPatchSchema = exports.walletDataResolver = exports.walletDataValidator = exports.walletDataSchema = exports.walletExternalResolver = exports.walletResolver = exports.walletSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.walletSchema = typebox_1.Type.Object({
    ownerId: typebox_1.Type.String(),
    balance: typebox_1.Type.Number()
}, { $id: 'Wallet', additionalProperties: false });
exports.walletResolver = (0, schema_1.resolve)({});
exports.walletExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.walletDataSchema = typebox_1.Type.Intersect([
    typebox_1.Type.Omit(exports.walletSchema, ['ownerId']),
    typebox_1.Type.Object({
        id: typebox_1.Type.String(),
        owner: typebox_1.Type.String()
    }, { additionalProperties: false })
], { $id: 'WalletData', additionalProperties: false });
exports.walletDataValidator = (0, typebox_1.getDataValidator)(exports.walletDataSchema, validators_1.dataValidator);
exports.walletDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.walletPatchSchema = typebox_1.Type.Partial(exports.walletSchema, {
    $id: 'WalletPatch'
});
exports.walletPatchValidator = (0, typebox_1.getDataValidator)(exports.walletPatchSchema, validators_1.dataValidator);
exports.walletPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.walletQueryProperties = typebox_1.Type.Omit(exports.walletSchema, ['balance']);
exports.walletQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.walletQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.walletQueryValidator = (0, typebox_1.getValidator)(exports.walletQuerySchema, validators_1.queryValidator);
exports.walletQueryResolver = (0, schema_1.resolve)({});
