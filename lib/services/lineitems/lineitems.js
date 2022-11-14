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
exports.lineitems = void 0;
const schema_1 = require("@feathersjs/schema");
const lineitems_schema_1 = require("./lineitems.schema");
const lineitems_class_1 = require("./lineitems.class");
__exportStar(require("./lineitems.class"), exports);
__exportStar(require("./lineitems.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const lineitems = (app) => {
    // Register our service on the Feathers application
    app.use('lineitems', new lineitems_class_1.LineitemsService((0, lineitems_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('lineitems').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(lineitems_schema_1.lineitemsQueryValidator),
                schema_1.hooks.validateData(lineitems_schema_1.lineitemsDataValidator),
                schema_1.hooks.resolveQuery(lineitems_schema_1.lineitemsQueryResolver),
                schema_1.hooks.resolveData(lineitems_schema_1.lineitemsDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(lineitems_schema_1.lineitemsResolver),
                schema_1.hooks.resolveExternal(lineitems_schema_1.lineitemsExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.lineitems = lineitems;
