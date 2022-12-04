"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twilioQueryResolver = exports.twilioQueryValidator = exports.twilioQuerySchema = exports.twilioQueryProperties = exports.twilioDataResolver = exports.twilioDataValidator = exports.twilioDataSchema = exports.twilioExternalResolver = exports.twilioResolver = exports.twilioSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.twilioSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Twilio', additionalProperties: false });
exports.twilioResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.twilioExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.twilioDataSchema = typebox_1.Type.Pick(exports.twilioSchema, ['text'], {
    $id: 'TwilioData',
    additionalProperties: false
});
exports.twilioDataValidator = (0, typebox_1.getDataValidator)(exports.twilioDataSchema, validators_1.dataValidator);
exports.twilioDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.twilioQueryProperties = typebox_1.Type.Pick(exports.twilioSchema, ['id', 'text'], { additionalProperties: false });
exports.twilioQuerySchema = (0, typebox_1.querySyntax)(exports.twilioQueryProperties);
exports.twilioQueryValidator = (0, typebox_1.getValidator)(exports.twilioQuerySchema, validators_1.queryValidator);
exports.twilioQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
