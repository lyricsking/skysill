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
exports.pcategories = void 0;
const schema_1 = require("@feathersjs/schema");
const pcategories_schema_1 = require("./pcategories.schema");
const pcategories_class_1 = require("./pcategories.class");
__exportStar(require("./pcategories.class"), exports);
__exportStar(require("./pcategories.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const pcategories = (app) => {
    // Register our service on the Feathers application
    app.use('pcategories', new pcategories_class_1.PcategoriesService((0, pcategories_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('pcategories').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(pcategories_schema_1.pcategoriesQueryValidator),
                schema_1.hooks.validateData(pcategories_schema_1.pcategoriesDataValidator),
                schema_1.hooks.resolveQuery(pcategories_schema_1.pcategoriesQueryResolver),
                schema_1.hooks.resolveData(pcategories_schema_1.pcategoriesDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(pcategories_schema_1.pcategoriesResolver),
                schema_1.hooks.resolveExternal(pcategories_schema_1.pcategoriesExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.pcategories = pcategories;
