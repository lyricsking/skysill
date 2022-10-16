import { FeathersBaseContext, FeathersAppInfo } from '../commons';
export interface AppGeneratorData extends FeathersAppInfo {
    /**
     * The application name
     */
    name: string;
    /**
     * A short description of the app
     */
    description: string;
    /**
     * The selected user authentication strategies
     */
    authStrategies: string[];
    /**
     * The database connection string
     */
    connectionString: string;
    /**
     * The source folder where files are put
     */
    lib: string;
}
export declare type AppGeneratorContext = FeathersBaseContext & AppGeneratorData & {
    dependencies: string[];
    devDependencies: string[];
};
export declare type AppGeneratorArguments = FeathersBaseContext & Partial<AppGeneratorData>;
export declare const generate: (ctx: AppGeneratorArguments) => Promise<AppGeneratorContext>;
