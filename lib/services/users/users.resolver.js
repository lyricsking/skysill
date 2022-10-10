"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersResolvers = exports.usersQueryResolver = exports.usersDispatchResolver = exports.usersResultResolver = exports.usersPatchResolver = exports.usersDataResolver = void 0;
const schema_1 = require("@feathersjs/schema");
const authentication_local_1 = require("@feathersjs/authentication-local");
const users_schema_1 = require("./users.schema");
// Resolver for the basic data model (e.g. creating new entries)
exports.usersDataResolver = (0, schema_1.resolve)({
    schema: users_schema_1.usersDataSchema,
    validate: 'before',
    properties: {
        password: (0, authentication_local_1.passwordHash)({ strategy: 'local' })
    }
});
// Resolver for making partial updates
exports.usersPatchResolver = (0, schema_1.resolve)({
    schema: users_schema_1.usersPatchSchema,
    validate: 'before',
    properties: {
        password: (0, authentication_local_1.passwordHash)({ strategy: 'local' })
    }
});
// Resolver for the data that is being returned
exports.usersResultResolver = (0, schema_1.resolve)({
    schema: users_schema_1.usersResultSchema,
    validate: false,
    properties: {}
});
// Resolver for the "safe" version that external clients are allowed to see
exports.usersDispatchResolver = (0, schema_1.resolve)({
    schema: users_schema_1.usersResultSchema,
    validate: false,
    properties: {
        // The password should never be visible externally
        password: async () => undefined
    }
});
// Resolver for allowed query properties
exports.usersQueryResolver = (0, schema_1.resolve)({
    schema: users_schema_1.usersQuerySchema,
    validate: 'before',
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
// Export all resolvers in a format that can be used with the resolveAll hook
exports.usersResolvers = {
    result: exports.usersResultResolver,
    dispatch: exports.usersDispatchResolver,
    data: {
        create: exports.usersDataResolver,
        update: exports.usersDataResolver,
        patch: exports.usersPatchResolver
    },
    query: exports.usersQueryResolver
};
