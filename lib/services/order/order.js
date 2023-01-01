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
exports.order = void 0;
const schema_1 = require("@feathersjs/schema");
const order_schema_1 = require("./order.schema");
const order_class_1 = require("./order.class");
const resolve_to_number_1 = require("../../hooks/resolve-to-number");
const generate_id_1 = require("../../hooks/generate-id");
const around_patch_order_1 = require("../../hooks/around-patch-order");
__exportStar(require("./order.class"), exports);
__exportStar(require("./order.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const order = (app) => {
    // Register our service on the Feathers application
    app.use('order', new order_class_1.OrderService((0, order_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('order').hooks({
        around: {
            all: [],
            patch: [
                schema_1.hooks.validateData(order_schema_1.orderPatchValidator),
                schema_1.hooks.resolveData(order_schema_1.orderPatchResolver),
                around_patch_order_1.aroundPatchOrder,
            ],
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(order_schema_1.orderQueryValidator),
                (0, resolve_to_number_1.resolveToNumber)(['subtotal', 'deliveryFee']),
                schema_1.hooks.resolveQuery(order_schema_1.orderQueryResolver),
            ],
            create: [
                schema_1.hooks.validateData(order_schema_1.orderDataValidator),
                schema_1.hooks.resolveData(order_schema_1.orderDataResolver),
                (0, generate_id_1.generateId)(11)
            ],
        },
        after: {
            all: [schema_1.hooks.resolveResult(order_schema_1.orderResolver), schema_1.hooks.resolveExternal(order_schema_1.orderExternalResolver)],
        },
        error: {
            all: []
        }
    });
};
exports.order = order;
