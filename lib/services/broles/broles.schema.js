"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brolesQueryResolver = exports.brolesQueryValidator = exports.brolesQuerySchema = exports.brolesQueryProperties = exports.brolesDataResolver = exports.brolesDataValidator = exports.brolesDataSchema = exports.brolesExternalResolver = exports.brolesResolver = exports.brolesSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.brolesSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    businesId: typebox_1.Type.String(),
    shopId: typebox_1.Type.String(),
    role: typebox_1.Type.Enum({
        manager: 'manager',
        assistance: 'assistance'
    }),
}, { $id: 'Broles', additionalProperties: false });
exports.brolesResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.brolesExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.brolesDataSchema = typebox_1.Type.Omit(exports.brolesSchema, ['id'], {
    $id: 'BrolesData',
    additionalProperties: false
});
exports.brolesDataValidator = (0, typebox_1.getDataValidator)(exports.brolesDataSchema, validators_1.dataValidator);
exports.brolesDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.brolesQueryProperties = typebox_1.Type.Omit(exports.brolesSchema, [], { additionalProperties: false });
exports.brolesQuerySchema = (0, typebox_1.querySyntax)(exports.brolesQueryProperties);
exports.brolesQueryValidator = (0, typebox_1.getValidator)(exports.brolesQuerySchema, validators_1.queryValidator);
exports.brolesQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
