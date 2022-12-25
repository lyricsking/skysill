"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const koa_static_1 = __importDefault(require("koa-static"));
const feathers_1 = require("@feathersjs/feathers");
const configuration_1 = __importDefault(require("@feathersjs/configuration"));
const koa_1 = require("@feathersjs/koa");
const socketio_1 = __importDefault(require("@feathersjs/socketio"));
const configuration_2 = require("./schemas/configuration");
const logger_1 = require("./logger");
const sqlite_1 = require("./sqlite");
const authentication_1 = require("./authentication");
const index_1 = require("./services/index");
const channels_1 = require("./channels");
const app = (0, koa_1.koa)((0, feathers_1.feathers)());
exports.app = app;
// Load our app configuration (see config/ folder)
app.configure((0, configuration_1.default)(configuration_2.configurationValidator));
// Set up Koa middleware
app.use((0, koa_1.cors)());
app.use((0, koa_static_1.default)(app.get('public')));
app.use((0, koa_1.errorHandler)());
app.use((0, koa_1.parseAuthentication)());
app.use((0, koa_1.bodyParser)());
// Configure services and transports
app.configure((0, koa_1.rest)());
app.configure((0, socketio_1.default)({
    cors: {
        origin: app.get('origins')
    }
}));
app.configure(sqlite_1.sqlite);
app.configure(authentication_1.authentication);
app.configure(index_1.services);
app.configure(channels_1.channels);
// Register hooks that run on all service methods
app.hooks({
    around: {
        all: [logger_1.logErrorHook]
    },
    before: {
        all: [
            async (context) => {
                console.log(context.app.get('shipday').);
            }
        ]
    },
    after: {},
    error: {}
});
// Register application setup and teardown hooks here
app.hooks({
    setup: [],
    teardown: []
});
