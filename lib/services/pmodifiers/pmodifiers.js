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
exports.pmodifiers = void 0;
const schema_1 = require("@feathersjs/schema");
const pmodifiers_schema_1 = require("./pmodifiers.schema");
const pmodifiers_class_1 = require("./pmodifiers.class");
__exportStar(require("./pmodifiers.class"), exports);
__exportStar(require("./pmodifiers.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const pmodifiers = (app) => {
    // Register our service on the Feathers application
    app.use('pmodifiers', new pmodifiers_class_1.PmodifiersService((0, pmodifiers_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('pmodifiers').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(pmodifiers_schema_1.pmodifiersQueryValidator),
                schema_1.hooks.validateData(pmodifiers_schema_1.pmodifiersDataValidator),
                schema_1.hooks.resolveQuery(pmodifiers_schema_1.pmodifiersQueryResolver),
                schema_1.hooks.resolveData(pmodifiers_schema_1.pmodifiersDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(pmodifiers_schema_1.pmodifiersResolver),
                schema_1.hooks.resolveExternal(pmodifiers_schema_1.pmodifiersExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.pmodifiers = pmodifiers;
