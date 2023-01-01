"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ShipdayOrderService = void 0;
const axios_1 = __importDefault(require("axios"));
// This is a skeleton for a custom service class. Remove or add the methods you need here
class ShipdayOrderService {
    constructor(options) {
        this.options = options;
        this.apiKey = ''; //options.app.get('shipday').apiKey;
        this.url = ''; //options.app.get('shipday').orderUrl;
    }
    async find(_params) {
        const options = {
            method: 'GET',
            url: `${this.url}`,
            headers: {
                accept: 'application/json',
                Authorization: `Basic ${this.apiKey}`
            }
        };
        return await axios_1.default.request(options);
    }
    async get(id, _params) {
        const options = {
            method: 'GET',
            url: `${this.url}/${id}`,
            headers: {
                accept: 'application/json',
                Authorization: `Basic ${this.apiKey}`
            }
        };
        return await axios_1.default.request(options);
    }
    async create(data, params) {
        if (Array.isArray(data)) {
            return Promise.all(data.map((current) => this.create(current, params)));
        }
        const options = {
            method: 'POST',
            url: this.url,
            headers: {
                accept: 'application/json',
                Authorization: `Basic ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            data
        };
        const res = await axios_1.default.request(options);
        if (res.status == 200 && res.data.success == true) {
            return data.orderNumber = res.data.orderId;
        }
        return res.data;
    }
    async patch(id, data, params) {
        const options = {
            method: 'POST',
            url: `${this.url}/edit/${id}`,
            headers: {
                accept: 'application/json',
                Authorization: `Basic ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            data
        };
        const res = await axios_1.default.request(options);
        if (res.status == 200 && res.data.success == true) {
            return data.orderNumber = res.data.orderId;
        }
        return res.data;
    }
    async remove(id, _params) {
        const options = {
            method: 'DELETE',
            url: `${this.url}/${id}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bsaic ${this.apiKey}`
            }
        };
        const res = await axios_1.default.request(options);
        if (res.status == 204) {
        }
        else {
        }
    }
}
exports.ShipdayOrderService = ShipdayOrderService;
const getOptions = (app) => {
    return { app };
};
exports.getOptions = getOptions;
