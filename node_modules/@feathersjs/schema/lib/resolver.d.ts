import { Schema } from './schema';
export declare type PropertyResolver<T, V, C> = (value: V | undefined, obj: T, context: C, status: ResolverStatus<T, C>) => Promise<V | undefined>;
export declare type PropertyResolverMap<T, C> = {
    [key in keyof T]?: PropertyResolver<T, T[key], C>;
};
export declare type ResolverConverter<T, C> = (obj: any, context: C, status: ResolverStatus<T, C>) => Promise<T | undefined>;
export interface ResolverConfig<T, C> {
    schema?: Schema<T>;
    validate?: 'before' | 'after' | false;
    properties: PropertyResolverMap<T, C>;
    converter?: ResolverConverter<T, C>;
}
export interface ResolverStatus<T, C> {
    path: string[];
    originalContext?: C;
    properties?: string[];
    stack: PropertyResolver<T, any, C>[];
}
export declare class Resolver<T, C> {
    options: ResolverConfig<T, C>;
    readonly _type: T;
    constructor(options: ResolverConfig<T, C>);
    resolveProperty<D, K extends keyof T>(name: K, data: D, context: C, status?: Partial<ResolverStatus<T, C>>): Promise<T[K]>;
    convert<D>(data: D, context: C, status?: Partial<ResolverStatus<T, C>>): Promise<T | D>;
    resolve<D>(_data: D, context: C, status?: Partial<ResolverStatus<T, C>>): Promise<T>;
}
export declare function resolve<T, C>(options: ResolverConfig<T, C>): Resolver<T, C>;
