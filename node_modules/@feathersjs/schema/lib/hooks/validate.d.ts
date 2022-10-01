import { HookContext, NextFunction } from '@feathersjs/feathers';
import { Schema } from '../schema';
export declare const validateQuery: <H extends HookContext<import("@feathersjs/feathers").Application<any, any>, any>>(schema: Schema<any>) => (context: H, next?: NextFunction) => Promise<any>;
export declare const validateData: <H extends HookContext<import("@feathersjs/feathers").Application<any, any>, any>>(schema: Schema<any>) => (context: H, next?: NextFunction) => Promise<any>;
