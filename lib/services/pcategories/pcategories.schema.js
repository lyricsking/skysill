"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pcategoriesQueryResolver = exports.pcategoriesQueryValidator = exports.pcategoriesQuerySchema = exports.pcategoriesQueryProperties = exports.pcategoriesDataResolver = exports.pcategoriesDataValidator = exports.pcategoriesDataSchema = exports.pcategoriesExternalResolver = exports.pcategoriesResolver = exports.pcategoriesSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.pcategoriesSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    businessId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
}, { $id: 'Pcategories', additionalProperties: false });
exports.pcategoriesResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.pcategoriesExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.pcategoriesDataSchema = typebox_1.Type.Omit(exports.pcategoriesSchema, ['id'], {
    $id: 'PcategoriesData',
    additionalProperties: false
});
exports.pcategoriesDataValidator = (0, typebox_1.getDataValidator)(exports.pcategoriesDataSchema, validators_1.dataValidator);
exports.pcategoriesDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.pcategoriesQueryProperties = typebox_1.Type.Omit(exports.pcategoriesSchema, [], {
    additionalProperties: false
});
exports.pcategoriesQuerySchema = (0, typebox_1.querySyntax)(exports.pcategoriesQueryProperties);
exports.pcategoriesQueryValidator = (0, typebox_1.getValidator)(exports.pcategoriesQuerySchema, validators_1.queryValidator);
exports.pcategoriesQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
