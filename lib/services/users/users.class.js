"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = exports.usersHooks = void 0;
const knex_1 = require("@feathersjs/knex");
const schema_1 = require("@feathersjs/schema");
const authentication_1 = require("@feathersjs/authentication");
const users_resolver_1 = require("./users.resolver");
exports.usersHooks = {
    around: {
        all: [],
        get: [(0, authentication_1.authenticate)('jwt'), (0, schema_1.resolveAll)(users_resolver_1.usersResolvers)],
        find: [(0, authentication_1.authenticate)('jwt'), (0, schema_1.resolveAll)(users_resolver_1.usersResolvers)],
        create: [(0, schema_1.resolveAll)(users_resolver_1.usersResolvers)],
        patch: [(0, authentication_1.authenticate)('jwt'), (0, schema_1.resolveAll)(users_resolver_1.usersResolvers)],
        update: [(0, authentication_1.authenticate)('jwt'), (0, schema_1.resolveAll)(users_resolver_1.usersResolvers)],
        remove: [(0, authentication_1.authenticate)('jwt'), (0, schema_1.resolveAll)(users_resolver_1.usersResolvers)]
    },
    before: {},
    after: {},
    error: {}
};
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class UsersService extends knex_1.KnexService {
}
exports.UsersService = UsersService;
