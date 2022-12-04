"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const feathers_1 = require("@feathersjs/feathers");
const userServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const employeeRoleServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const businessServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const lineItemServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const orderServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const productCategoryServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const modifierServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const modifierOptionServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const productServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const shopServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const walletServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const transactionsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const driverServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
const twilioServiceMethods = ['sendVerification', 'verify'];
const createClient = (connection) => {
    const client = (0, feathers_1.feathers)();
    client.configure(connection);
    client.use('user', connection.service('user'), {
        methods: userServiceMethods
    });
    client.use('employeeRole', connection.service('employeeRole'), {
        methods: employeeRoleServiceMethods
    });
    client.use('business', connection.service('business'), {
        methods: businessServiceMethods
    });
    client.use('lineitem', connection.service('lineitem'), {
        methods: lineItemServiceMethods
    });
    client.use('order', connection.service('order'), {
        methods: orderServiceMethods
    });
    client.use('productCategory', connection.service('productCategory'), {
        methods: productCategoryServiceMethods
    });
    client.use('modifier', connection.service('modifier'), {
        methods: modifierServiceMethods
    });
    client.use('modifierOption', connection.service('modifierOption'), {
        methods: modifierOptionServiceMethods
    });
    client.use('product', connection.service('product'), {
        methods: productServiceMethods
    });
    client.use('shop', connection.service('shop'), {
        methods: shopServiceMethods
    });
    client.use('wallet', connection.service('wallet'), {
        methods: walletServiceMethods
    });
    client.use('transaction', connection.service('transaction'), {
        methods: transactionsServiceMethods
    });
    client.use('driver', connection.service('driver'), {
        methods: driverServiceMethods
    });
    client.use('twilio', connection.service('twilio'), {
        methods: twilioServiceMethods
    });
    return client;
};
exports.createClient = createClient;
