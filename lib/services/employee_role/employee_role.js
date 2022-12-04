"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRole = void 0;
const schema_1 = require("@feathersjs/schema");
const employee_role_schema_1 = require("./employee_role.schema");
const employee_role_class_1 = require("./employee_role.class");
__exportStar(require("./employee_role.class"), exports);
__exportStar(require("./employee_role.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const employeeRole = (app) => {
    // Register our service on the Feathers application
    app.use('employeeRole', new employee_role_class_1.EmployeeRoleService((0, employee_role_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('employeeRole').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(employee_role_schema_1.employeeRoleQueryValidator),
                schema_1.hooks.validateData(employee_role_schema_1.employeeRoleDataValidator),
                schema_1.hooks.resolveQuery(employee_role_schema_1.employeeRoleQueryResolver),
                schema_1.hooks.resolveData(employee_role_schema_1.employeeRoleDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(employee_role_schema_1.employeeRoleResolver), schema_1.hooks.resolveExternal(employee_role_schema_1.employeeRoleExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.employeeRole = employeeRole;
