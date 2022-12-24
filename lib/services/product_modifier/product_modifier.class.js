"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ProductModifierService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class ProductModifierService extends knex_1.KnexService {
}
exports.ProductModifierService = ProductModifierService;
const getOptions = (app) => {
    return {
        id: 'productId',
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'product_modifier'
    };
};
exports.getOptions = getOptions;
