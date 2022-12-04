"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverQueryResolver = exports.driverQueryValidator = exports.driverQuerySchema = exports.driverQueryProperties = exports.driverDataResolver = exports.driverDataValidator = exports.driverDataSchema = exports.driverExternalResolver = exports.driverResolver = exports.driverSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.driverSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Driver', additionalProperties: false });
exports.driverResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.driverExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.driverDataSchema = typebox_1.Type.Pick(exports.driverSchema, ['text'], {
    $id: 'DriverData',
    additionalProperties: false
});
exports.driverDataValidator = (0, typebox_1.getDataValidator)(exports.driverDataSchema, validators_1.dataValidator);
exports.driverDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.driverQueryProperties = typebox_1.Type.Pick(exports.driverSchema, ['id', 'text'], {
    additionalProperties: false
});
exports.driverQuerySchema = (0, typebox_1.querySyntax)(exports.driverQueryProperties);
exports.driverQueryValidator = (0, typebox_1.getValidator)(exports.driverQuerySchema, validators_1.queryValidator);
exports.driverQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
