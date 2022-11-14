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
exports.shops = void 0;
const schema_1 = require("@feathersjs/schema");
const shops_schema_1 = require("./shops.schema");
const shops_class_1 = require("./shops.class");
__exportStar(require("./shops.class"), exports);
__exportStar(require("./shops.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const shops = (app) => {
    // Register our service on the Feathers application
    app.use('shops', new shops_class_1.ShopsService((0, shops_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('shops').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(shops_schema_1.shopsQueryValidator),
                schema_1.hooks.validateData(shops_schema_1.shopsDataValidator),
                schema_1.hooks.resolveQuery(shops_schema_1.shopsQueryResolver),
                schema_1.hooks.resolveData(shops_schema_1.shopsDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(shops_schema_1.shopsResolver), schema_1.hooks.resolveExternal(shops_schema_1.shopsExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.shops = shops;
