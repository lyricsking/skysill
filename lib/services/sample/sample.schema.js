"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleQueryResolver = exports.sampleQueryValidator = exports.sampleQuerySchema = exports.sampleQueryProperties = exports.sampleDataResolver = exports.sampleDataValidator = exports.sampleDataSchema = exports.sampleExternalResolver = exports.sampleResolver = exports.sampleSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.sampleSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Sample', additionalProperties: false });
exports.sampleResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.sampleExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.sampleDataSchema = typebox_1.Type.Pick(exports.sampleSchema, ['text'], {
    $id: 'SampleData',
    additionalProperties: false
});
exports.sampleDataValidator = (0, typebox_1.getDataValidator)(exports.sampleDataSchema, validators_1.dataValidator);
exports.sampleDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.sampleQueryProperties = typebox_1.Type.Pick(exports.sampleSchema, ['id', 'text'], { additionalProperties: false });
exports.sampleQuerySchema = (0, typebox_1.querySyntax)(exports.sampleQueryProperties);
exports.sampleQueryValidator = (0, typebox_1.getValidator)(exports.sampleQuerySchema, validators_1.queryValidator);
exports.sampleQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
