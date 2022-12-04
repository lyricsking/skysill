"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ProductCategoryService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class ProductCategoryService extends knex_1.KnexService {
}
exports.ProductCategoryService = ProductCategoryService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'product_category'
    };
};
exports.getOptions = getOptions;
