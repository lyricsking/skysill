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
exports.modifier = void 0;
const schema_1 = require("@feathersjs/schema");
const modifier_schema_1 = require("./modifier.schema");
const modifier_class_1 = require("./modifier.class");
__exportStar(require("./modifier.class"), exports);
__exportStar(require("./modifier.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const modifier = (app) => {
    // Register our service on the Feathers application
    app.use('modifier', new modifier_class_1.ModifierService((0, modifier_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('modifier').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(modifier_schema_1.modifierQueryValidator),
                schema_1.hooks.validateData(modifier_schema_1.modifierDataValidator),
                schema_1.hooks.resolveQuery(modifier_schema_1.modifierQueryResolver),
                schema_1.hooks.resolveData(modifier_schema_1.modifierDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(modifier_schema_1.modifierResolver),
                schema_1.hooks.resolveExternal(modifier_schema_1.modifierExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.modifier = modifier;
