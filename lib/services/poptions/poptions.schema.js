"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poptionsQueryResolver = exports.poptionsQueryValidator = exports.poptionsQuerySchema = exports.poptionsQueryProperties = exports.poptionsDataResolver = exports.poptionsDataValidator = exports.poptionsDataSchema = exports.poptionsExternalResolver = exports.poptionsResolver = exports.poptionsSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.poptionsSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    modifierId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    price: typebox_1.Type.Number(),
}, { $id: 'Poptions', additionalProperties: false });
exports.poptionsResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.poptionsExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.poptionsDataSchema = typebox_1.Type.Omit(exports.poptionsSchema, ['id'], {
    $id: 'PoptionsData',
    additionalProperties: false
});
exports.poptionsDataValidator = (0, typebox_1.getDataValidator)(exports.poptionsDataSchema, validators_1.dataValidator);
exports.poptionsDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.poptionsQueryProperties = exports.poptionsSchema;
exports.poptionsQuerySchema = (0, typebox_1.querySyntax)(exports.poptionsQueryProperties);
exports.poptionsQueryValidator = (0, typebox_1.getValidator)(exports.poptionsQuerySchema, validators_1.queryValidator);
exports.poptionsQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
