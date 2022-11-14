"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const shops_1 = require("./shops/shops");
const products_1 = require("./products/products");
const poptions_1 = require("./poptions/poptions");
const pmodifiers_1 = require("./pmodifiers/pmodifiers");
const pcategories_1 = require("./pcategories/pcategories");
const orders_1 = require("./orders/orders");
const lineitems_1 = require("./lineitems/lineitems");
const business_1 = require("./business/business");
const broles_1 = require("./broles/broles");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(shops_1.shops);
    app.configure(products_1.products);
    app.configure(poptions_1.poptions);
    app.configure(pmodifiers_1.pmodifiers);
    app.configure(pcategories_1.pcategories);
    app.configure(orders_1.orders);
    app.configure(lineitems_1.lineitems);
    app.configure(business_1.business);
    app.configure(broles_1.broles);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
