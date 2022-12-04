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
exports.driver = void 0;
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const driver_schema_1 = require("./driver.schema");
const driver_class_1 = require("./driver.class");
__exportStar(require("./driver.class"), exports);
__exportStar(require("./driver.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const driver = (app) => {
    // Register our service on the Feathers application
    app.use('driver', new driver_class_1.DriverService((0, driver_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('driver').hooks({
        around: {
            all: [(0, authentication_1.authenticate)('jwt')]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(driver_schema_1.driverQueryValidator),
                schema_1.hooks.validateData(driver_schema_1.driverDataValidator),
                schema_1.hooks.resolveQuery(driver_schema_1.driverQueryResolver),
                schema_1.hooks.resolveData(driver_schema_1.driverDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(driver_schema_1.driverResolver), schema_1.hooks.resolveExternal(driver_schema_1.driverExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.driver = driver;
