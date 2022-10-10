"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const users_class_1 = require("./users.class");
// A configure function that registers the service and its hooks via `app.configure`
function users(app) {
    const options = {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'users'
        // Service options will go here
    };
    // Register our service on the Feathers application
    app.use('users', new users_class_1.UsersService(options), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('users').hooks(users_class_1.usersHooks);
}
exports.users = users;
