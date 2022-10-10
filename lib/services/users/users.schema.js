"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersQuerySchema = exports.usersResultSchema = exports.usersPatchSchema = exports.usersDataSchema = void 0;
const schema_1 = require("@feathersjs/schema");
// Schema for the basic data model (e.g. creating new entries)
exports.usersDataSchema = (0, schema_1.schema)({
    $id: 'UsersData',
    type: 'object',
    additionalProperties: false,
    required: ['firstname', 'lastname', 'phone'],
    properties: {
        firstname: { type: 'string' },
        lastname: { type: 'string' },
        phone: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' }
    }
});
// Schema for making partial updates
exports.usersPatchSchema = (0, schema_1.schema)({
    $id: 'UsersPatch',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...exports.usersDataSchema.properties
    }
});
// Schema for the data that is being returned
exports.usersResultSchema = (0, schema_1.schema)({
    $id: 'UsersResult',
    type: 'object',
    additionalProperties: false,
    required: ['id'],
    properties: {
        ...exports.usersDataSchema.properties,
        id: {
            type: 'number'
        },
    }
});
// Queries shouldn't allow doing anything with the password
const { password, ...usersQueryProperties } = exports.usersResultSchema.properties;
// Schema for allowed query properties
exports.usersQuerySchema = (0, schema_1.schema)({
    $id: 'UsersQuery',
    type: 'object',
    additionalProperties: false,
    properties: {
        ...(0, schema_1.querySyntax)(usersQueryProperties)
    }
});
