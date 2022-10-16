"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const pinion_1 = require("@feathershq/pinion");
const defaultConfig = ({}) => ({
    host: 'localhost',
    port: 3030,
    public: './public/',
    origins: ['http://localhost:3030'],
    paginate: {
        default: 10,
        max: 50
    }
});
const customEnvironment = {
    port: {
        __name: 'PORT',
        __format: 'number'
    },
    host: 'HOSTNAME'
};
const testConfig = {
    port: 8998
};
const generate = (ctx) => (0, pinion_1.generator)(ctx)
    .then((0, pinion_1.writeJSON)(defaultConfig, (0, pinion_1.toFile)('config', 'default.json')))
    .then((0, pinion_1.writeJSON)(testConfig, (0, pinion_1.toFile)('config', 'test.json')))
    .then((0, pinion_1.writeJSON)(customEnvironment, (0, pinion_1.toFile)('config', 'custom-environment-variables.json')));
exports.generate = generate;
//# sourceMappingURL=config.tpl.js.map