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
exports.broles = void 0;
const schema_1 = require("@feathersjs/schema");
const broles_schema_1 = require("./broles.schema");
const broles_class_1 = require("./broles.class");
__exportStar(require("./broles.class"), exports);
__exportStar(require("./broles.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const broles = (app) => {
    // Register our service on the Feathers application
    app.use('broles', new broles_class_1.BrolesService((0, broles_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('broles').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(broles_schema_1.brolesQueryValidator),
                schema_1.hooks.validateData(broles_schema_1.brolesDataValidator),
                schema_1.hooks.resolveQuery(broles_schema_1.brolesQueryResolver),
                schema_1.hooks.resolveData(broles_schema_1.brolesDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(broles_schema_1.brolesResolver), schema_1.hooks.resolveExternal(broles_schema_1.brolesExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.broles = broles;
