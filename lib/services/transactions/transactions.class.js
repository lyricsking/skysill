"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.TransactionsService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class TransactionsService extends knex_1.KnexService {
}
exports.TransactionsService = TransactionsService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'transactions'
    };
};
exports.getOptions = getOptions;
