"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQueryResolver = exports.userQueryValidator = exports.userQuerySchema = exports.userQueryProperties = exports.userDataResolver = exports.userDataValidator = exports.userDataSchema = exports.userExternalResolver = exports.userResolver = exports.userSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const authentication_local_1 = require("@feathersjs/authentication-local");
const validators_1 = require("../../schemas/validators");
const wallet_schema_1 = require("../wallet/wallet.schema");
// Main data model schema
exports.userSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    firstname: typebox_1.Type.Optional(typebox_1.Type.String()),
    lastname: typebox_1.Type.Optional(typebox_1.Type.String()),
    phone: typebox_1.Type.String(),
    email: typebox_1.Type.Optional(typebox_1.Type.String()),
    password: typebox_1.Type.Optional(typebox_1.Type.String()),
    wallet: typebox_1.Type.Optional(typebox_1.Type.Ref(wallet_schema_1.walletSchema)),
}, { $id: 'User', additionalProperties: false });
exports.userResolver = (0, schema_1.resolve)({
    properties: {
        wallet: async (_value, user, context) => {
            // Associate the user's wallet.
            const wallet = await context.app.service('wallet').find({
                query: {
                    $limit: 1,
                    owner: "user",
                    ownerId: user.id,
                }
            });
            return wallet.data[0];
        }
    }
});
exports.userExternalResolver = (0, schema_1.resolve)({
    properties: {
        // The password should never be visible externally
        password: async () => undefined,
    }
});
// Schema for the basic data model (e.g. creating new entries)
exports.userDataSchema = typebox_1.Type.Omit(exports.userSchema, ['id', 'wallet'], {
    $id: 'UserData',
    additionalProperties: false
});
exports.userDataValidator = (0, typebox_1.getDataValidator)(exports.userDataSchema, validators_1.dataValidator);
exports.userDataResolver = (0, schema_1.resolve)({
    properties: {
        password: (0, authentication_local_1.passwordHash)({ strategy: 'local' })
    }
});
// Schema for allowed query properties
exports.userQueryProperties = typebox_1.Type.Omit(exports.userSchema, ['password', 'wallet']);
exports.userQuerySchema = (0, typebox_1.querySyntax)(exports.userQueryProperties);
exports.userQueryValidator = (0, typebox_1.getValidator)(exports.userQuerySchema, validators_1.queryValidator);
exports.userQueryResolver = (0, schema_1.resolve)({
    properties: {
        // If there is a user (e.g. with authentication), they are only allowed to see their own data
        id: async (value, user, context) => {
            if (context.params.user) {
                return context.params.user.id;
            }
            return value;
        }
    }
});
