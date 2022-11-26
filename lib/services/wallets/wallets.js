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
exports.wallets = void 0;
const schema_1 = require("@feathersjs/schema");
const wallets_schema_1 = require("./wallets.schema");
const wallets_class_1 = require("./wallets.class");
__exportStar(require("./wallets.class"), exports);
__exportStar(require("./wallets.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const wallets = (app) => {
    // Register our service on the Feathers application
    app.use('wallets', new wallets_class_1.WalletsService((0, wallets_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('wallets').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(wallets_schema_1.walletsQueryValidator),
                schema_1.hooks.validateData(wallets_schema_1.walletsDataValidator),
                schema_1.hooks.resolveQuery(wallets_schema_1.walletsQueryResolver),
                schema_1.hooks.resolveData(wallets_schema_1.walletsDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(wallets_schema_1.walletsResolver), schema_1.hooks.resolveExternal(wallets_schema_1.walletsExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.wallets = wallets;
