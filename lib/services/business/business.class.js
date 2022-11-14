"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.BusinessService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class BusinessService extends knex_1.KnexService {
}
exports.BusinessService = BusinessService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'business'
    };
};
exports.getOptions = getOptions;
