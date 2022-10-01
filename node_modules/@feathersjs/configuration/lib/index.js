"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const commons_1 = require("@feathersjs/commons");
const config_1 = __importDefault(require("config"));
const debug = (0, commons_1.createDebug)('@feathersjs/configuration');
module.exports = function init(schema) {
    return (app) => {
        if (!app) {
            return config_1.default;
        }
        const configuration = { ...config_1.default };
        debug(`Initializing configuration for ${config_1.default.util.getEnv('NODE_ENV')} environment`);
        Object.keys(configuration).forEach((name) => {
            const value = configuration[name];
            debug(`Setting ${name} configuration value to`, value);
            app.set(name, value);
        });
        if (schema) {
            app.hooks({
                setup: [
                    async (_context, next) => {
                        await schema.validate(configuration);
                        await next();
                    }
                ]
            });
        }
        return config_1.default;
    };
};
//# sourceMappingURL=index.js.map