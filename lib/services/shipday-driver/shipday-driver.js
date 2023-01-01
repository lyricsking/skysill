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
exports.shipdayDriver = void 0;
const schema_1 = require("@feathersjs/schema");
const shipday_driver_schema_1 = require("./shipday-driver.schema");
const shipday_driver_class_1 = require("./shipday-driver.class");
__exportStar(require("./shipday-driver.class"), exports);
__exportStar(require("./shipday-driver.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const shipdayDriver = (app) => {
    // Register our service on the Feathers application
    app.use('shipday-driver', new shipday_driver_class_1.ShipdayDriverService((0, shipday_driver_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('shipday-driver').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(shipday_driver_schema_1.shipdayDriverQueryValidator),
                schema_1.hooks.validateData(shipday_driver_schema_1.shipdayDriverDataValidator),
                schema_1.hooks.resolveQuery(shipday_driver_schema_1.shipdayDriverQueryResolver),
                schema_1.hooks.resolveData(shipday_driver_schema_1.shipdayDriverDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(shipday_driver_schema_1.shipdayDriverResolver),
                schema_1.hooks.resolveExternal(shipday_driver_schema_1.shipdayDriverExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.shipdayDriver = shipdayDriver;
