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
exports.twilio = void 0;
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const twilio_schema_1 = require("./twilio.schema");
const twilio_class_1 = require("./twilio.class");
__exportStar(require("./twilio.class"), exports);
__exportStar(require("./twilio.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const twilio = (app) => {
    // Register our service on the Feathers application
    app.use('twilio', new twilio_class_1.TwilioService((0, twilio_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['sendVerification', 'verify'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('twilio').hooks({
        around: {
            all: [(0, authentication_1.authenticate)('jwt')]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(twilio_schema_1.twilioQueryValidator),
                schema_1.hooks.validateData(twilio_schema_1.twilioDataValidator),
                schema_1.hooks.resolveQuery(twilio_schema_1.twilioQueryResolver),
                schema_1.hooks.resolveData(twilio_schema_1.twilioDataResolver)
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(twilio_schema_1.twilioResolver), schema_1.hooks.resolveExternal(twilio_schema_1.twilioExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.twilio = twilio;
