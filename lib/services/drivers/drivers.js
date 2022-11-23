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
exports.drivers = void 0;
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const drivers_schema_1 = require("./drivers.schema");
const drivers_class_1 = require("./drivers.class");
__exportStar(require("./drivers.class"), exports);
__exportStar(require("./drivers.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const drivers = (app) => {
    // Register our service on the Feathers application
    app.use('drivers', new drivers_class_1.DriversService((0, drivers_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('drivers').hooks({
        around: {
            all: [(0, authentication_1.authenticate)('jwt')]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(drivers_schema_1.driversQueryValidator),
                schema_1.hooks.validateData(drivers_schema_1.driversDataValidator),
                schema_1.hooks.resolveQuery(drivers_schema_1.driversQueryResolver),
                schema_1.hooks.resolveData(drivers_schema_1.driversDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(drivers_schema_1.driversResolver), schema_1.hooks.resolveExternal(drivers_schema_1.driversExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.drivers = drivers;
