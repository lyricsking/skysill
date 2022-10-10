"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const users_service_1 = require("./users/users.service");
const services = (app) => {
    app.configure(users_service_1.users);
    // All services will be registered here
};
exports.services = services;
