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
exports.user = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const user_schema_1 = require("./user.schema");
const user_class_1 = require("./user.class");
const generate_id_1 = require("../../hooks/generate-id");
const create_wallet_1 = require("../../hooks/create-wallet");
__exportStar(require("./user.class"), exports);
__exportStar(require("./user.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const user = (app) => {
    // Register our service on the Feathers application
    app.use('user', new user_class_1.UserService((0, user_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('user').hooks({
        around: {
            all: [schema_1.hooks.resolveExternal(user_schema_1.userExternalResolver), schema_1.hooks.resolveResult(user_schema_1.userResolver)],
            find: [(0, authentication_1.authenticate)('jwt')],
            get: [(0, authentication_1.authenticate)('jwt')],
            create: [],
            update: [(0, authentication_1.authenticate)('jwt')],
            patch: [(0, authentication_1.authenticate)('jwt')],
            remove: [(0, authentication_1.authenticate)('jwt')]
        },
        before: {
            all: [schema_1.hooks.validateQuery(user_schema_1.userQueryValidator), schema_1.hooks.resolveQuery(user_schema_1.userQueryResolver)],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(user_schema_1.userDataValidator),
                schema_1.hooks.resolveData(user_schema_1.userDataResolver),
                (0, generate_id_1.generateId)(10)
            ],
            patch: [schema_1.hooks.validateData(user_schema_1.userPatchValidator), schema_1.hooks.resolveData(user_schema_1.userPatchResolver)],
            remove: []
        },
        after: {
            all: [],
            create: [create_wallet_1.createWallet]
        },
        error: {
            all: []
        }
    });
};
exports.user = user;
