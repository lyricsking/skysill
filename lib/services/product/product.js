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
exports.product = void 0;
const schema_1 = require("@feathersjs/schema");
const product_schema_1 = require("./product.schema");
const product_class_1 = require("./product.class");
const resolve_to_number_1 = require("../../hooks/resolve-to-number");
const string_percent_encode_1 = __importDefault(require("@stdlib/string-percent-encode"));
__exportStar(require("./product.class"), exports);
__exportStar(require("./product.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const product = (app) => {
    // Register our service on the Feathers application
    app.use('product', new product_class_1.ProductService((0, product_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('product').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(product_schema_1.productQueryValidator),
                (0, resolve_to_number_1.resolveToNumber)(['price', 'discount']),
                schema_1.hooks.validateData(product_schema_1.productDataValidator),
                schema_1.hooks.resolveQuery(product_schema_1.productQueryResolver),
                schema_1.hooks.resolveData(product_schema_1.productDataResolver)
            ],
            create: [
                async (context) => {
                    console.log(`Running hook generateBusinessId on ${context.path}.${context.method}`);
                    const prefix = (0, string_percent_encode_1.default)(context.data.shopId);
                    const name = (0, string_percent_encode_1.default)(context.data.name);
                    context.data.id = prefix + '-' + name;
                }
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(product_schema_1.productResolver),
                schema_1.hooks.resolveExternal(product_schema_1.productExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.product = product;
