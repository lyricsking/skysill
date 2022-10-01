import { HookContext, NextFunction } from '@feathersjs/feathers';
export interface HashPasswordOptions {
    authentication?: string;
    strategy?: string;
}
/**
 * @deprecated Use Feathers schema resolvers and the `passwordHash` resolver instead
 * @param field
 * @param options
 * @returns
 */
export default function hashPassword(field: string, options?: HashPasswordOptions): (context: HookContext, next?: NextFunction) => Promise<any>;
