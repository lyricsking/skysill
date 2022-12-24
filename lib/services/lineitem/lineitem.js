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
exports.lineitem = void 0;
const schema_1 = require("@feathersjs/schema");
const lineitem_schema_1 = require("./lineitem.schema");
const lineitem_class_1 = require("./lineitem.class");
const resolve_to_number_1 = require("../../hooks/resolve-to-number");
const maybe_create_order_1 = require("../../hooks/maybe-create-order");
const create_line_item_1 = require("../../hooks/create-line-item");
__exportStar(require("./lineitem.class"), exports);
__exportStar(require("./lineitem.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const lineitem = (app) => {
    // Register our service on the Feathers application
    app.use('lineitem', new lineitem_class_1.LineitemService((0, lineitem_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('lineitem').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(lineitem_schema_1.lineitemQueryValidator),
                (0, resolve_to_number_1.resolveToNumber)('quantity'),
                schema_1.hooks.validateData(lineitem_schema_1.lineitemDataValidator),
                schema_1.hooks.resolveQuery(lineitem_schema_1.lineitemQueryResolver),
                schema_1.hooks.resolveData(lineitem_schema_1.lineitemDataResolver)
            ],
            create: [maybe_create_order_1.maybeCreateOrder, create_line_item_1.createLineItem]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(lineitem_schema_1.lineitemResolver),
                schema_1.hooks.resolveExternal(lineitem_schema_1.lineitemExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.lineitem = lineitem;
