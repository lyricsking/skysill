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
exports.shop = void 0;
const schema_1 = require("@feathersjs/schema");
const shop_schema_1 = require("./shop.schema");
const shop_class_1 = require("./shop.class");
const number_gen_1 = require("../../utils/number-gen");
__exportStar(require("./shop.class"), exports);
__exportStar(require("./shop.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const shop = (app) => {
    // Register our service on the Feathers application
    app.use('shop', new shop_class_1.ShopService((0, shop_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('shop').hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(shop_schema_1.shopQueryValidator),
                schema_1.hooks.validateData(shop_schema_1.shopDataValidator),
                schema_1.hooks.resolveQuery(shop_schema_1.shopQueryResolver),
                schema_1.hooks.resolveData(shop_schema_1.shopDataResolver)
            ],
            create: [
                async (context) => {
                    console.log(`Running hook generateShopId on ${context.path}.${context.method}`);
                    //const biz = await context.app.service('business')._get(context.data.businessId, {
                    // query: { 
                    //    $select: ['name']
                    //   }
                    //  });
                    const shopName = context.data.shopName;
                    const shopId = shopName + '-' + (0, number_gen_1.numberOfLength)(6);
                    context.data.id = shopId;
                }
            ]
        },
        after: {
            all: [schema_1.hooks.resolveResult(shop_schema_1.shopResolver), schema_1.hooks.resolveExternal(shop_schema_1.shopExternalResolver)]
        },
        error: {
            all: []
        }
    });
};
exports.shop = shop;
