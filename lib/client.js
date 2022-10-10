"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const feathers_1 = require("@feathersjs/feathers");
const createClient = (connection) => {
    const client = (0, feathers_1.feathers)();
    client.configure(connection);
    return client;
};
exports.createClient = createClient;
