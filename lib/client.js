"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const feathers_1 = require("@feathersjs/feathers");
const userServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const brolesServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const businessServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const lineitemsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const ordersServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const pcategoriesServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const pmodifiersServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const poptionsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const productsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const shopsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const walletsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const transactionsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const driversServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const createClient = (connection) => {
    const client = (0, feathers_1.feathers)();
    client.configure(connection);
    client.use('users', connection.service('users'), {
        methods: userServiceMethods
    });
    client.use('broles', connection.service('broles'), {
        methods: brolesServiceMethods
    });
    client.use('business', connection.service('business'), {
        methods: businessServiceMethods
    });
    client.use('lineitems', connection.service('lineitems'), {
        methods: lineitemsServiceMethods
    });
    client.use('orders', connection.service('orders'), {
        methods: ordersServiceMethods
    });
    client.use('pcategories', connection.service('pcategories'), {
        methods: pcategoriesServiceMethods
    });
    client.use('pmodifiers', connection.service('pmodifiers'), {
        methods: pmodifiersServiceMethods
    });
    client.use('poptions', connection.service('poptions'), {
        methods: poptionsServiceMethods
    });
    client.use('products', connection.service('products'), {
        methods: productsServiceMethods
    });
    client.use('shops', connection.service('shops'), {
        methods: shopsServiceMethods
    });
    client.use('wallets', connection.service('wallets'), {
        methods: walletsServiceMethods
    });
    client.use('transactions', connection.service('transactions'), {
        methods: transactionsServiceMethods
    });
    client.use('drivers', connection.service('drivers'), {
        methods: driversServiceMethods
    });
    return client;
};
exports.createClient = createClient;
