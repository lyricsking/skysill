"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversQueryResolver = exports.driversQueryValidator = exports.driversQuerySchema = exports.driversQueryProperties = exports.driversDataResolver = exports.driversDataValidator = exports.driversDataSchema = exports.driversExternalResolver = exports.driversResolver = exports.driversSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.driversSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Drivers', additionalProperties: false });
exports.driversResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.driversExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.driversDataSchema = typebox_1.Type.Pick(exports.driversSchema, ['text'], {
    $id: 'DriversData',
    additionalProperties: false
});
exports.driversDataValidator = (0, typebox_1.getDataValidator)(exports.driversDataSchema, validators_1.dataValidator);
exports.driversDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.driversQueryProperties = typebox_1.Type.Pick(exports.driversSchema, ['id', 'text'], {
    additionalProperties: false
});
exports.driversQuerySchema = (0, typebox_1.querySyntax)(exports.driversQueryProperties);
exports.driversQueryValidator = (0, typebox_1.getValidator)(exports.driversQuerySchema, validators_1.queryValidator);
exports.driversQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
