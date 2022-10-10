import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams } from '@feathersjs/knex';
import type { UsersData, UsersResult, UsersQuery } from './users.schema';
export declare const usersHooks: {
    around: {
        all: never[];
        get: (((context: import("@feathersjs/feathers").HookContext<import("@feathersjs/feathers").Application<any, any>, any>, _next?: import("@feathersjs/hooks").NextFunction | undefined) => Promise<any>) | ((this: any, context: import("../../declarations").HookContext<any>, next?: import("@feathersjs/hooks").AsyncMiddleware<import("../../declarations").HookContext<any>> | undefined) => Promise<any>))[];
        find: (((context: import("@feathersjs/feathers").HookContext<import("@feathersjs/feathers").Application<any, any>, any>, _next?: import("@feathersjs/hooks").NextFunction | undefined) => Promise<any>) | ((this: any, context: import("../../declarations").HookContext<any>, next?: import("@feathersjs/hooks").AsyncMiddleware<import("../../declarations").HookContext<any>> | undefined) => Promise<any>))[];
        create: ((this: any, context: import("../../declarations").HookContext<any>, next?: import("@feathersjs/hooks").AsyncMiddleware<import("../../declarations").HookContext<any>> | undefined) => Promise<any>)[];
        patch: (((context: import("@feathersjs/feathers").HookContext<import("@feathersjs/feathers").Application<any, any>, any>, _next?: import("@feathersjs/hooks").NextFunction | undefined) => Promise<any>) | ((this: any, context: import("../../declarations").HookContext<any>, next?: import("@feathersjs/hooks").AsyncMiddleware<import("../../declarations").HookContext<any>> | undefined) => Promise<any>))[];
        update: (((context: import("@feathersjs/feathers").HookContext<import("@feathersjs/feathers").Application<any, any>, any>, _next?: import("@feathersjs/hooks").NextFunction | undefined) => Promise<any>) | ((this: any, context: import("../../declarations").HookContext<any>, next?: import("@feathersjs/hooks").AsyncMiddleware<import("../../declarations").HookContext<any>> | undefined) => Promise<any>))[];
        remove: (((context: import("@feathersjs/feathers").HookContext<import("@feathersjs/feathers").Application<any, any>, any>, _next?: import("@feathersjs/hooks").NextFunction | undefined) => Promise<any>) | ((this: any, context: import("../../declarations").HookContext<any>, next?: import("@feathersjs/hooks").AsyncMiddleware<import("../../declarations").HookContext<any>> | undefined) => Promise<any>))[];
    };
    before: {};
    after: {};
    error: {};
};
export interface UsersParams extends KnexAdapterParams<UsersQuery> {
}
export declare class UsersService extends KnexService<UsersResult, UsersData, UsersParams> {
}
