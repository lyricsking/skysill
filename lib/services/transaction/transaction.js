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
exports.transaction = void 0;
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const knex_1 = require("@feathersjs/knex");
const transaction_schema_1 = require("./transaction.schema");
const transaction_class_1 = require("./transaction.class");
const patch_wallet_balance_1 = require("../../hooks/patch-wallet-balance");
const resolve_to_number_1 = require("../../hooks/resolve-to-number");
__exportStar(require("./transaction.class"), exports);
__exportStar(require("./transaction.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const transaction = (app) => {
    // Register our service on the Feathers application
    app.use('transaction', new transaction_class_1.TransactionService((0, transaction_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('transaction').hooks({
        around: {
            all: [(0, authentication_1.authenticate)('jwt')]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(transaction_schema_1.transactionQueryValidator),
                (0, resolve_to_number_1.resolveToNumber)('amount'),
                schema_1.hooks.validateData(transaction_schema_1.transactionDataValidator),
                schema_1.hooks.resolveQuery(transaction_schema_1.transactionQueryResolver),
                schema_1.hooks.resolveData(transaction_schema_1.transactionDataResolver),
                // Transaction start
                knex_1.transaction.start()
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(transaction_schema_1.transactionResolver),
                schema_1.hooks.resolveExternal(transaction_schema_1.transactionExternalResolver),
                // Transaction ends
                knex_1.transaction.end()
            ],
            create: [
                patch_wallet_balance_1.patchWalletBalance,
            ],
        },
        error: {
            all: [
                // Transaction rollback
                knex_1.transaction.rollback()
            ]
        }
    });
};
exports.transaction = transaction;
