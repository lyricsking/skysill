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
exports.sample = void 0;
const schema_1 = require("@feathersjs/schema");
const sample_schema_1 = require("./sample.schema");
const sample_class_1 = require("./sample.class");
__exportStar(require("./sample.class"), exports);
__exportStar(require("./sample.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const sample = (app) => {
    // Register our service on the Feathers application
    app.use('sample', new sample_class_1.SampleService((0, sample_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('sample').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(sample_schema_1.sampleQueryValidator),
                schema_1.hooks.validateData(sample_schema_1.sampleDataValidator),
                schema_1.hooks.resolveQuery(sample_schema_1.sampleQueryResolver),
                schema_1.hooks.resolveData(sample_schema_1.sampleDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(sample_schema_1.sampleResolver), schema_1.hooks.resolveExternal(sample_schema_1.sampleExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.sample = sample;
