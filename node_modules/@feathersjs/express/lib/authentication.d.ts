import { RequestHandler } from 'express';
export declare type AuthenticationSettings = {
    service?: string;
    strategies?: string[];
};
export declare function parseAuthentication(settings?: AuthenticationSettings): RequestHandler;
export declare function authenticate(settings: string | AuthenticationSettings, ...strategies: string[]): RequestHandler;
