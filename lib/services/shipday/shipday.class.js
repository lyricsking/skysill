"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ShipdayService = void 0;
// This is a skeleton for a custom service class. Remove or add the methods you need here
class ShipdayService {
    constructor(options) {
        this.options = options;
    }
    async find(_params) {
        return [];
    }
    async get(id, _params) {
        return {
            id: 0,
            text: `A new message with ID: ${id}!`
        };
    }
    async create(data, params) {
        if (Array.isArray(data)) {
            return Promise.all(data.map((current) => this.create(current, params)));
        }
        return {
            id: 0,
            ...data
        };
    }
    async update(id, data, _params) {
        return {
            id: 0,
            ...data
        };
    }
    async patch(id, data, _params) {
        return {
            id: 0,
            ...data
        };
    }
    async remove(id, _params) {
        return {
            id: 0,
            text: 'removed'
        };
    }
}
exports.ShipdayService = ShipdayService;
const getOptions = (app) => {
    return { app };
};
exports.getOptions = getOptions;
