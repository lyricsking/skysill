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
exports.productModifier = void 0;
const schema_1 = require("@feathersjs/schema");
const product_modifier_schema_1 = require("./product_modifier.schema");
const product_modifier_class_1 = require("./product_modifier.class");
__exportStar(require("./product_modifier.class"), exports);
__exportStar(require("./product_modifier.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const productModifier = (app) => {
    // Register our service on the Feathers application
    app.use('productModifier', new product_modifier_class_1.ProductModifierService((0, product_modifier_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('productModifier').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(product_modifier_schema_1.productModifierQueryValidator),
                schema_1.hooks.validateData(product_modifier_schema_1.productModifierDataValidator),
                schema_1.hooks.resolveQuery(product_modifier_schema_1.productModifierQueryResolver),
                schema_1.hooks.resolveData(product_modifier_schema_1.productModifierDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(product_modifier_schema_1.productModifierResolver),
                schema_1.hooks.resolveExternal(product_modifier_schema_1.productModifierExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.productModifier = productModifier;
