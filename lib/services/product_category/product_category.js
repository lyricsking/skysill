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
exports.productCategory = void 0;
const schema_1 = require("@feathersjs/schema");
const product_category_schema_1 = require("./product_category.schema");
const product_category_class_1 = require("./product_category.class");
__exportStar(require("./product_category.class"), exports);
__exportStar(require("./product_category.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const productCategory = (app) => {
    // Register our service on the Feathers application
    app.use('productCategory', new product_category_class_1.ProductCategoryService((0, product_category_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('productCategory').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(product_category_schema_1.productCategoryQueryValidator),
                schema_1.hooks.validateData(product_category_schema_1.productCategoryDataValidator),
                schema_1.hooks.resolveQuery(product_category_schema_1.productCategoryQueryResolver),
                schema_1.hooks.resolveData(product_category_schema_1.productCategoryDataResolver)
            ]
        },
        after: {
            all: [
                schema_1.hooks.resolveResult(product_category_schema_1.productCategoryResolver),
                schema_1.hooks.resolveExternal(product_category_schema_1.productCategoryExternalResolver)
            ]
        },
        error: {
            all: []
        }
    });
};
exports.productCategory = productCategory;
