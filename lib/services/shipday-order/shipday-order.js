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
exports.shipdayOrder = void 0;
const schema_1 = require("@feathersjs/schema");
const shipday_order_schema_1 = require("./shipday-order.schema");
const shipday_order_class_1 = require("./shipday-order.class");
__exportStar(require("./shipday-order.class"), exports);
__exportStar(require("./shipday-order.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const shipdayOrder = (app) => {
    // Register our service on the Feathers application
    app.use('shipday-order', new shipday_order_class_1.ShipdayOrderService((0, shipday_order_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('shipday-order').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(shipday_order_schema_1.shipdayOrderQueryValidator),
                schema_1.hooks.validateData(shipday_order_schema_1.shipdayOrderDataValidator),
                schema_1.hooks.resolveQuery(shipday_order_schema_1.shipdayOrderQueryResolver),
                schema_1.hooks.resolveData(shipday_order_schema_1.shipdayOrderDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(shipday_order_schema_1.shipdayOrderResolver),
                schema_1.hooks.resolveExternal(shipday_order_schema_1.shipdayOrderExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.shipdayOrder = shipdayOrder;
