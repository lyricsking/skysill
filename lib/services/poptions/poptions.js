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
exports.poptions = void 0;
const schema_1 = require("@feathersjs/schema");
const poptions_schema_1 = require("./poptions.schema");
const poptions_class_1 = require("./poptions.class");
__exportStar(require("./poptions.class"), exports);
__exportStar(require("./poptions.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const poptions = (app) => {
    // Register our service on the Feathers application
    app.use('poptions', new poptions_class_1.PoptionsService((0, poptions_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('poptions').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(poptions_schema_1.poptionsQueryValidator),
                schema_1.hooks.validateData(poptions_schema_1.poptionsDataValidator),
                schema_1.hooks.resolveQuery(poptions_schema_1.poptionsQueryResolver),
                schema_1.hooks.resolveData(poptions_schema_1.poptionsDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(poptions_schema_1.poptionsResolver),
                schema_1.hooks.resolveExternal(poptions_schema_1.poptionsExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.poptions = poptions;