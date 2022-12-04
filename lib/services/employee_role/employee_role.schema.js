"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRoleQueryResolver = exports.employeeRoleQueryValidator = exports.employeeRoleQuerySchema = exports.employeeRoleQueryProperties = exports.employeeRoleDataResolver = exports.employeeRoleDataValidator = exports.employeeRoleDataSchema = exports.employeeRoleExternalResolver = exports.employeeRoleResolver = exports.employeeRoleSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.employeeRoleSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    businesId: typebox_1.Type.String(),
    shopId: typebox_1.Type.String(),
    role: typebox_1.Type.Enum({
        manager: 'manager',
        assistance: 'assistance'
    }),
}, { $id: 'EmployeeRole', additionalProperties: false });
exports.employeeRoleResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.employeeRoleExternalResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for creating new entries
exports.employeeRoleDataSchema = typebox_1.Type.Omit(exports.employeeRoleSchema, ['id'], {
    $id: 'EmployeeRoleData',
    additionalProperties: false
});
exports.employeeRoleDataValidator = (0, typebox_1.getDataValidator)(exports.employeeRoleDataSchema, validators_1.dataValidator);
exports.employeeRoleDataResolver = (0, schema_1.resolve)({
    properties: {}
});
// Schema for allowed query properties
exports.employeeRoleQueryProperties = typebox_1.Type.Omit(exports.employeeRoleSchema, [], { additionalProperties: false });
exports.employeeRoleQuerySchema = (0, typebox_1.querySyntax)(exports.employeeRoleQueryProperties);
exports.employeeRoleQueryValidator = (0, typebox_1.getValidator)(exports.employeeRoleQuerySchema, validators_1.queryValidator);
exports.employeeRoleQueryResolver = (0, schema_1.resolve)({
    properties: {}
});
