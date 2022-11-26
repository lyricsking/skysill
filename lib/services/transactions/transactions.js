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
exports.transactions = void 0;
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const transactions_schema_1 = require("./transactions.schema");
const transactions_class_1 = require("./transactions.class");
const patch_wallet_balance_1 = require("../../hooks/patch-wallet-balance");
__exportStar(require("./transactions.class"), exports);
__exportStar(require("./transactions.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const transactions = (app) => {
    // Register our service on the Feathers application
    app.use('transactions', new transactions_class_1.TransactionsService((0, transactions_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('transactions').hooks({
        around: {
            all: [(0, authentication_1.authenticate)('jwt')]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(transactions_schema_1.transactionsQueryValidator),
                schema_1.hooks.validateData(transactions_schema_1.transactionsDataValidator),
                schema_1.hooks.resolveQuery(transactions_schema_1.transactionsQueryResolver),
                schema_1.hooks.resolveData(transactions_schema_1.transactionsDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(transactions_schema_1.transactionsResolver),
                schema_1.hooks.resolveExternal(transactions_schema_1.transactionsExternalResolver)
            ],
            create: [patch_wallet_balance_1.patchWalletBalance],
        },
        error: {
            all: []
        }
    });
};
exports.transactions = transactions;
