"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterBase = void 0;
const errors_1 = require("@feathersjs/errors");
const query_1 = require("./query");
const alwaysMulti = {
    find: true,
    get: false,
    update: false
};
/**
 * An abstract base class that a database adapter can extend from to implement the
 * `__find`, `__get`, `__update`, `__patch` and `__remove` methods.
 */
class AdapterBase {
    constructor(options) {
        this.options = {
            id: 'id',
            events: [],
            paginate: false,
            multi: false,
            filters: {},
            operators: [],
            ...options
        };
    }
    get id() {
        return this.options.id;
    }
    get events() {
        return this.options.events;
    }
    /**
     * Check if this adapter allows multiple updates for a method.
     * @param method The method name to check.
     * @param params The service call params.
     * @returns Wether or not multiple updates are allowed.
     */
    allowsMulti(method, params = {}) {
        const always = alwaysMulti[method];
        if (typeof always !== 'undefined') {
            return always;
        }
        const { multi } = this.getOptions(params);
        if (multi === true || multi === false) {
            return multi;
        }
        return multi.includes(method);
    }
    /**
     * Returns the combined options for a service call. Options will be merged
     * with `this.options` and `params.adapter` for dynamic overrides.
     *
     * @param params The parameters for the service method call
     * @returns The actual options for this call
     */
    getOptions(params) {
        const paginate = params.paginate !== undefined ? params.paginate : this.options.paginate;
        return {
            ...this.options,
            paginate,
            ...params.adapter
        };
    }
    /**
     * Sanitize the incoming data, e.g. removing invalid keywords etc.
     *
     * @param data The data to sanitize
     * @param _params Service call parameters
     * @returns The sanitized data
     */
    async sanitizeData(data, _params) {
        return data;
    }
    /**
     * Returns a sanitized version of `params.query`, converting filter values
     * (like $limit and $skip) into the expected type. Will throw an error if
     * a `$` prefixed filter or operator value that is not allowed in `filters`
     * or `operators` is encountered.
     *
     * @param params The service call parameter.
     * @returns A new object containing the sanitized query.
     */
    async sanitizeQuery(params = {}) {
        const options = this.getOptions(params);
        const { query, filters } = (0, query_1.filterQuery)(params.query, options);
        return {
            ...filters,
            ...query
        };
    }
    async _find(params) {
        const query = await this.sanitizeQuery(params);
        return this.$find({
            ...params,
            query
        });
    }
    /**
     * Retrieve a single resource matching the given ID, skipping any service-level hooks but sanitize the query
     * with allowed filters and properties by calling `sanitizeQuery`.
     *
     * @param id - ID of the resource to locate
     * @param params - Service call parameters {@link Params}
     * @see {@link HookLessServiceMethods}
     * @see {@link https://docs.feathersjs.com/api/services.html#get-id-params|Feathers API Documentation: .get(id, params)}
     */
    async _get(id, params) {
        const query = await this.sanitizeQuery(params);
        return this.$get(id, {
            ...params,
            query
        });
    }
    async _create(data, params) {
        if (Array.isArray(data) && !this.allowsMulti('create', params)) {
            throw new errors_1.MethodNotAllowed('Can not create multiple entries');
        }
        const payload = Array.isArray(data)
            ? await Promise.all(data.map((current) => this.sanitizeData(current, params)))
            : await this.sanitizeData(data, params);
        return this.$create(payload, params);
    }
    /**
     * Replace any resources matching the given ID with the given data, skipping any service-level hooks.
     *
     * @param id - ID of the resource to be updated
     * @param data - Data to be put in place of the current resource.
     * @param params - Service call parameters {@link Params}
     * @see {@link HookLessServiceMethods}
     * @see {@link https://docs.feathersjs.com/api/services.html#update-id-data-params|Feathers API Documentation: .update(id, data, params)}
     */
    async _update(id, data, params) {
        if (id === null || Array.isArray(data)) {
            throw new errors_1.BadRequest("You can not replace multiple instances. Did you mean 'patch'?");
        }
        const payload = await this.sanitizeData(data, params);
        const query = await this.sanitizeQuery(params);
        return this.$update(id, payload, {
            ...params,
            query
        });
    }
    async _patch(id, data, params) {
        if (id === null && !this.allowsMulti('patch', params)) {
            throw new errors_1.MethodNotAllowed('Can not patch multiple entries');
        }
        const { $limit, ...query } = await this.sanitizeQuery(params);
        const payload = await this.sanitizeData(data, params);
        return this.$patch(id, payload, {
            ...params,
            query
        });
    }
    async _remove(id, params) {
        if (id === null && !this.allowsMulti('remove', params)) {
            throw new errors_1.MethodNotAllowed('Can not remove multiple entries');
        }
        const { $limit, ...query } = await this.sanitizeQuery(params);
        return this.$remove(id, {
            ...params,
            query
        });
    }
}
exports.AdapterBase = AdapterBase;
//# sourceMappingURL=service.js.map