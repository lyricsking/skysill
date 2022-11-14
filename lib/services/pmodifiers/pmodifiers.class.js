"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.PmodifiersService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class PmodifiersService extends knex_1.KnexService {
}
exports.PmodifiersService = PmodifiersService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'pmodifiers'
    };
};
exports.getOptions = getOptions;
