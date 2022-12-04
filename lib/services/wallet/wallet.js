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
exports.wallet = void 0;
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const wallet_schema_1 = require("./wallet.schema");
const wallet_class_1 = require("./wallet.class");
__exportStar(require("./wallet.class"), exports);
__exportStar(require("./wallet.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const wallet = (app) => {
    // Register our service on the Feathers application
    app.use('wallet', new wallet_class_1.WalletService((0, wallet_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('wallet').hooks({
        around: {
            all: [],
            find: [(0, authentication_1.authenticate)('jwt')],
            get: [(0, authentication_1.authenticate)('jwt')],
            create: [],
            update: [(0, authentication_1.authenticate)('jwt')],
            patch: [(0, authentication_1.authenticate)('jwt')],
            remove: [(0, authentication_1.authenticate)('jwt')]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(wallet_schema_1.walletQueryValidator),
                schema_1.hooks.validateData(wallet_schema_1.walletDataValidator),
                schema_1.hooks.resolveQuery(wallet_schema_1.walletQueryResolver),
                schema_1.hooks.resolveData(wallet_schema_1.walletDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(wallet_schema_1.walletResolver), schema_1.hooks.resolveExternal(wallet_schema_1.walletExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.wallet = wallet;
