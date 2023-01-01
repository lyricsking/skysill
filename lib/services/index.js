"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const wallet_1 = require("./wallet/wallet");
const user_1 = require("./user/user");
const services = (app) => {
    app.configure(wallet_1.wallet);
    app.configure(user_1.user);
    // All services will be registered here
};
exports.services = services;
