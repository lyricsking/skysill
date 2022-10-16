"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.getDatabaseClient = exports.DATABASE_CLIENTS = exports.prompts = exports.defaultConnectionString = void 0;
const pinion_1 = require("@feathershq/pinion");
const chalk_1 = __importDefault(require("chalk"));
const commons_1 = require("../commons");
const defaultConnectionString = (type, name) => {
    const connectionStrings = {
        mongodb: `mongodb://localhost:27017/${name}`,
        mysql: `mysql://root:@localhost:3306/${name}`,
        postgresql: `postgres://postgres:@localhost:5432/${name}`,
        sqlite: `${name}.sqlite`,
        mssql: `mssql://root:password@localhost:1433/${name}`
    };
    return connectionStrings[type];
};
exports.defaultConnectionString = defaultConnectionString;
const prompts = ({ database, connectionString, pkg, name }) => [
    {
        name: 'database',
        type: 'list',
        when: !database,
        message: 'Which database are you connecting to?',
        suffix: chalk_1.default.grey(' Other databases can be added at any time'),
        choices: [
            { value: 'sqlite', name: 'SQLite' },
            { value: 'mongodb', name: 'MongoDB' },
            { value: 'postgresql', name: 'PostgreSQL' },
            { value: 'mysql', name: 'MySQL/MariaDB' },
            { value: 'mssql', name: 'Microsoft SQL' }
        ]
    },
    {
        name: 'connectionString',
        type: 'input',
        when: !connectionString,
        message: 'Enter your database connection string',
        default: (answers) => (0, exports.defaultConnectionString)(answers.database, answers.name || name || pkg.name)
    }
];
exports.prompts = prompts;
exports.DATABASE_CLIENTS = {
    mongodb: 'mongodb',
    sqlite: 'sqlite3',
    postgresql: 'pg',
    mysql: 'mysql',
    mssql: 'tedious'
};
const getDatabaseClient = (database) => exports.DATABASE_CLIENTS[database];
exports.getDatabaseClient = getDatabaseClient;
const generate = (ctx) => (0, pinion_1.generator)(ctx)
    .then((0, commons_1.initializeBaseContext)())
    .then((0, commons_1.checkPreconditions)())
    .then((0, pinion_1.prompt)(exports.prompts))
    .then((0, pinion_1.runGenerator)(__dirname, 'templates', ({ database }) => `${(0, commons_1.getDatabaseAdapter)(database)}.tpl`))
    .then((0, pinion_1.mergeJSON)(({ connectionString, database }) => (0, commons_1.getDatabaseAdapter)(database) === 'knex'
    ? {
        [database]: {
            client: (0, exports.getDatabaseClient)(database),
            connection: connectionString,
            ...(database === 'sqlite' ? { useNullAsDefault: true } : {})
        }
    }
    : {
        [database]: connectionString
    }, (0, pinion_1.toFile)('config', 'default.json')))
    .then((ctx) => {
    const dependencies = [];
    const adapter = (0, commons_1.getDatabaseAdapter)(ctx.database);
    const dbClient = (0, exports.getDatabaseClient)(ctx.database);
    dependencies.push(`@feathersjs/${adapter}`);
    if (adapter === 'knex') {
        dependencies.push('knex');
    }
    dependencies.push(dbClient);
    if (ctx.dependencies) {
        return {
            ...ctx,
            dependencies: [...ctx.dependencies, ...dependencies]
        };
    }
    return (0, pinion_1.install)((0, commons_1.addVersions)(dependencies, ctx.dependencyVersions), false, ctx.feathers.packager)(ctx);
});
exports.generate = generate;
//# sourceMappingURL=index.js.map