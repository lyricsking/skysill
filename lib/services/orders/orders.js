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
exports.orders = void 0;
const schema_1 = require("@feathersjs/schema");
const orders_schema_1 = require("./orders.schema");
const orders_class_1 = require("./orders.class");
__exportStar(require("./orders.class"), exports);
__exportStar(require("./orders.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const orders = (app) => {
    // Register our service on the Feathers application
    app.use('orders', new orders_class_1.OrdersService((0, orders_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('orders').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(orders_schema_1.ordersQueryValidator),
                schema_1.hooks.validateData(orders_schema_1.ordersDataValidator),
                schema_1.hooks.resolveQuery(orders_schema_1.ordersQueryResolver),
                schema_1.hooks.resolveData(orders_schema_1.ordersDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(orders_schema_1.ordersResolver), schema_1.hooks.resolveExternal(orders_schema_1.ordersExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.orders = orders;
