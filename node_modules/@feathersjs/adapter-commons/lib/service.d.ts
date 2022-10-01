import { Id, NullableId, Paginated, Query } from '@feathersjs/feathers';
import { AdapterParams, AdapterServiceOptions, InternalServiceMethods, PaginationOptions } from './declarations';
/**
 * An abstract base class that a database adapter can extend from to implement the
 * `__find`, `__get`, `__update`, `__patch` and `__remove` methods.
 */
export declare abstract class AdapterBase<T = any, D = Partial<T>, P extends AdapterParams = AdapterParams, O extends AdapterServiceOptions = AdapterServiceOptions> implements InternalServiceMethods<T, D, P> {
    options: O;
    constructor(options: O);
    get id(): string;
    get events(): string[];
    /**
     * Check if this adapter allows multiple updates for a method.
     * @param method The method name to check.
     * @param params The service call params.
     * @returns Wether or not multiple updates are allowed.
     */
    allowsMulti(method: string, params?: P): boolean;
    /**
     * Returns the combined options for a service call. Options will be merged
     * with `this.options` and `params.adapter` for dynamic overrides.
     *
     * @param params The parameters for the service method call
     * @returns The actual options for this call
     */
    getOptions(params: P): O;
    /**
     * Sanitize the incoming data, e.g. removing invalid keywords etc.
     *
     * @param data The data to sanitize
     * @param _params Service call parameters
     * @returns The sanitized data
     */
    sanitizeData<X = Partial<D>>(data: X, _params: P): Promise<X>;
    /**
     * Returns a sanitized version of `params.query`, converting filter values
     * (like $limit and $skip) into the expected type. Will throw an error if
     * a `$` prefixed filter or operator value that is not allowed in `filters`
     * or `operators` is encountered.
     *
     * @param params The service call parameter.
     * @returns A new object containing the sanitized query.
     */
    sanitizeQuery(params?: P): Promise<Query>;
    abstract $find(_params?: P & {
        paginate?: PaginationOptions;
    }): Promise<Paginated<T>>;
    abstract $find(_params?: P & {
        paginate: false;
    }): Promise<T[]>;
    abstract $find(params?: P): Promise<T[] | Paginated<T>>;
    /**
     * Retrieve all resources from this service, skipping any service-level hooks but sanitize the query
     * with allowed filters and properties by calling `sanitizeQuery`.
     *
     * @param params - Service call parameters {@link Params}
     * @see {@link HookLessServiceMethods}
     * @see {@link https://docs.feathersjs.com/api/services.html#find-params|Feathers API Documentation: .find(params)}
     */
    _find(_params?: P & {
        paginate?: PaginationOptions;
    }): Promise<Paginated<T>>;
    _find(_params?: P & {
        paginate: false;
    }): Promise<T[]>;
    _find(params?: P): Promise<T | T[] | Paginated<T>>;
    abstract $get(id: Id, params?: P): Promise<T>;
    /**
     * Retrieve a single resource matching the given ID, skipping any service-level hooks but sanitize the query
     * with allowed filters and properties by calling `sanitizeQuery`.
     *
     * @param id - ID of the resource to locate
     * @param params - Service call parameters {@link Params}
     * @see {@link HookLessServiceMethods}
     * @see {@link https://docs.feathersjs.com/api/services.html#get-id-params|Feathers API Documentation: .get(id, params)}
     */
    _get(id: Id, params?: P): Promise<T>;
    abstract $create(data: Partial<D>, params?: P): Promise<T>;
    abstract $create(data: Partial<D>[], params?: P): Promise<T[]>;
    abstract $create(data: Partial<D> | Partial<D>[], params?: P): Promise<T | T[]>;
    /**
     * Create a new resource for this service, skipping any service-level hooks, sanitize the data
     * and check if multiple updates are allowed.
     *
     * @param data - Data to insert into this service.
     * @param params - Service call parameters {@link Params}
     * @see {@link HookLessServiceMethods}
     * @see {@link https://docs.feathersjs.com/api/services.html#create-data-params|Feathers API Documentation: .create(data, params)}
     */
    _create(data: Partial<D>, params?: P): Promise<T>;
    _create(data: Partial<D>[], params?: P): Promise<T[]>;
    _create(data: Partial<D> | Partial<D>[], params?: P): Promise<T | T[]>;
    abstract $update(id: Id, data: D, params?: P): Promise<T>;
    /**
     * Replace any resources matching the given ID with the given data, skipping any service-level hooks.
     *
     * @param id - ID of the resource to be updated
     * @param data - Data to be put in place of the current resource.
     * @param params - Service call parameters {@link Params}
     * @see {@link HookLessServiceMethods}
     * @see {@link https://docs.feathersjs.com/api/services.html#update-id-data-params|Feathers API Documentation: .update(id, data, params)}
     */
    _update(id: Id, data: D, params?: P): Promise<T>;
    abstract $patch(id: null, data: Partial<D>, params?: P): Promise<T[]>;
    abstract $patch(id: Id, data: Partial<D>, params?: P): Promise<T>;
    abstract $patch(id: NullableId, data: Partial<D>, params?: P): Promise<T | T[]>;
    /**
     * Merge any resources matching the given ID with the given data, skipping any service-level hooks.
     * Sanitizes the query and data and checks it multiple updates are allowed.
     *
     * @param id - ID of the resource to be patched
     * @param data - Data to merge with the current resource.
     * @param params - Service call parameters {@link Params}
     * @see {@link HookLessServiceMethods}
     * @see {@link https://docs.feathersjs.com/api/services.html#patch-id-data-params|Feathers API Documentation: .patch(id, data, params)}
     */
    _patch(id: null, data: Partial<D>, params?: P): Promise<T[]>;
    _patch(id: Id, data: Partial<D>, params?: P): Promise<T>;
    _patch(id: NullableId, data: Partial<D>, params?: P): Promise<T | T[]>;
    abstract $remove(id: null, params?: P): Promise<T[]>;
    abstract $remove(id: Id, params?: P): Promise<T>;
    abstract $remove(id: NullableId, params?: P): Promise<T | T[]>;
    /**
     * Remove resources matching the given ID from the this service, skipping any service-level hooks.
     * Sanitized the query and verifies that multiple updates are allowed.
     *
     * @param id - ID of the resource to be removed
     * @param params - Service call parameters {@link Params}
     * @see {@link HookLessServiceMethods}
     * @see {@link https://docs.feathersjs.com/api/services.html#remove-id-params|Feathers API Documentation: .remove(id, params)}
     */
    _remove(id: null, params?: P): Promise<T[]>;
    _remove(id: Id, params?: P): Promise<T>;
    _remove(id: NullableId, params?: P): Promise<T | T[]>;
}
