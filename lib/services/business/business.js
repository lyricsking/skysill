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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.business = void 0;
const schema_1 = require("@feathersjs/schema");
const business_schema_1 = require("./business.schema");
const business_class_1 = require("./business.class");
const number_gen_1 = require("../../utils/number-gen");
const string_percent_encode_1 = __importDefault(require("@stdlib/string-percent-encode"));
__exportStar(require("./business.class"), exports);
__exportStar(require("./business.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const business = (app) => {
    // Register our service on the Feathers application
    app.use('business', new business_class_1.BusinessService((0, business_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('business').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(business_schema_1.businessQueryValidator),
                schema_1.hooks.validateData(business_schema_1.businessDataValidator),
                schema_1.hooks.resolveQuery(business_schema_1.businessQueryResolver),
                schema_1.hooks.resolveData(business_schema_1.businessDataResolver)
            ],
            create: [
                async (context) => {
                    console.log(`Running hook generateBusinessId on ${context.path}.${context.method}`);
                    const prefix = (0, string_percent_encode_1.default)(context.data.name);
                    context.data.id = prefix + '-' + (0, number_gen_1.numberOfLength)(5);
                }
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(business_schema_1.businessResolver),
                schema_1.hooks.resolveExternal(business_schema_1.businessExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.business = business;
