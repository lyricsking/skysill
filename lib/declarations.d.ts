import { HookContext as FeathersHookContext, NextFunction } from '@feathersjs/feathers';
import { Application as FeathersApplication } from '@feathersjs/koa';
import { ConfigurationSchema } from './configuration';
import { UsersResult } from './services/users/users.schema';
export { NextFunction };
export interface Configuration extends ConfigurationSchema {
}
export interface ServiceTypes {
}
export declare type Application = FeathersApplication<ServiceTypes, Configuration>;
export declare type HookContext<S = any> = FeathersHookContext<Application, S>;
declare module '@feathersjs/feathers' {
    interface Params {
        user?: UsersResult;
    }
}
