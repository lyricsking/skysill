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
exports.modifierOption = void 0;
const schema_1 = require("@feathersjs/schema");
const modifier_option_schema_1 = require("./modifier_option.schema");
const modifier_option_class_1 = require("./modifier_option.class");
__exportStar(require("./modifier_option.class"), exports);
__exportStar(require("./modifier_option.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const modifierOption = (app) => {
    // Register our service on the Feathers application
    app.use('modifierOption', new modifier_option_class_1.ModifierOptionService((0, modifier_option_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('modifierOption').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(modifier_option_schema_1.modifierOptionQueryValidator),
                schema_1.hooks.validateData(modifier_option_schema_1.modifierOptionDataValidator),
                schema_1.hooks.resolveQuery(modifier_option_schema_1.modifierOptionQueryResolver),
                schema_1.hooks.resolveData(modifier_option_schema_1.modifierOptionDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(modifier_option_schema_1.modifierOptionResolver),
                schema_1.hooks.resolveExternal(modifier_option_schema_1.modifierOptionExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.modifierOption = modifierOption;
