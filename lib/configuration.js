"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const authentication_1 = require("@feathersjs/authentication");
exports.configurationSchema = (0, schema_1.schema)({
    $id: 'ApplicationConfiguration',
    type: 'object',
    additionalProperties: false,
    required: ['host', 'port', 'public', 'paginate'],
    properties: {
        host: { type: 'string' },
        port: { type: 'number' },
        public: { type: 'string' },
        sqlite: {
            type: 'object',
            properties: {
                client: { type: 'string' },
                connection: { type: 'string' }
            }
        },
        authentication: authentication_1.authenticationSettingsSchema,
        origins: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        paginate: {
            type: 'object',
            additionalProperties: false,
            required: ['default', 'max'],
            properties: {
                default: { type: 'number' },
                max: { type: 'number' }
            }
        }
    }
}, new schema_1.Ajv({ coerceTypes: true }));
