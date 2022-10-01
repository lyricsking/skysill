import { RequestHandler } from 'express';
import { AuthenticationSettings } from './authentication';
import { Application } from './declarations';
export declare const formatter: RequestHandler;
export declare type RestOptions = {
    formatter?: RequestHandler;
    authentication?: AuthenticationSettings;
};
export declare const rest: (options?: RestOptions | RequestHandler) => (app: Application) => void;
