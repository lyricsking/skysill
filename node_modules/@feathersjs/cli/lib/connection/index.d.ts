import { FeathersBaseContext, DatabaseType } from '../commons';
export interface ConnectionGeneratorContext extends FeathersBaseContext {
    name?: string;
    database: DatabaseType;
    connectionString: string;
    dependencies: string[];
}
export declare type ConnectionGeneratorArguments = FeathersBaseContext & Partial<Pick<ConnectionGeneratorContext, 'database' | 'connectionString' | 'name'>>;
export declare const defaultConnectionString: (type: DatabaseType, name: string) => string;
export declare const prompts: ({ database, connectionString, pkg, name }: ConnectionGeneratorArguments) => ({
    name: string;
    type: string;
    when: boolean;
    message: string;
    suffix: string;
    choices: {
        value: string;
        name: string;
    }[];
    default?: undefined;
} | {
    name: string;
    type: string;
    when: boolean;
    message: string;
    default: (answers: {
        name?: string;
        database: DatabaseType;
    }) => string;
    suffix?: undefined;
    choices?: undefined;
})[];
export declare const DATABASE_CLIENTS: {
    mongodb: string;
    sqlite: string;
    postgresql: string;
    mysql: string;
    mssql: string;
};
export declare const getDatabaseClient: (database: DatabaseType) => string;
export declare const generate: (ctx: ConnectionGeneratorArguments) => Promise<{
    dependencies: string[];
    name?: string;
    database: DatabaseType;
    connectionString: string;
    feathers: import("../commons").FeathersAppInfo;
    pkg: import("../commons").AppPackageJson;
    lib: string;
    test: string;
    language: "ts" | "js";
    dependencyVersions?: import("../commons").DependencyVersions;
    cwd: string;
    _?: (string | number)[];
    pinion: import("@feathershq/pinion").Configuration;
}>;
