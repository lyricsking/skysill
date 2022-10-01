"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAll = exports.resolveDispatch = exports.resolveResult = exports.resolveData = exports.resolveQuery = exports.getDispatch = exports.DISPATCH = void 0;
const hooks_1 = require("@feathersjs/hooks");
const resolver_1 = require("../resolver");
const getContext = (context) => {
    return Object.freeze({
        ...context,
        params: Object.freeze({
            ...context.params,
            query: Object.freeze({})
        })
    });
};
const getData = (context) => {
    const isPaginated = context.method === 'find' && context.result.data;
    const data = isPaginated ? context.result.data : context.result;
    return { isPaginated, data };
};
const runResolvers = async (resolvers, data, ctx, status) => {
    let current = data;
    for (const resolver of resolvers) {
        if (resolver && typeof resolver.resolve === 'function') {
            current = await resolver.resolve(current, ctx, status);
        }
    }
    return current;
};
exports.DISPATCH = Symbol('@feathersjs/schema/dispatch');
const getDispatch = (value) => typeof value === 'object' && value !== null && value[exports.DISPATCH] !== undefined ? value[exports.DISPATCH] : value;
exports.getDispatch = getDispatch;
const resolveQuery = (...resolvers) => async (context, next) => {
    var _a;
    const ctx = getContext(context);
    const data = ((_a = context === null || context === void 0 ? void 0 : context.params) === null || _a === void 0 ? void 0 : _a.query) || {};
    const query = await runResolvers(resolvers, data, ctx);
    context.params = {
        ...context.params,
        query
    };
    if (typeof next === 'function') {
        return next();
    }
};
exports.resolveQuery = resolveQuery;
const resolveData = (settings) => async (context, next) => {
    if (context.method === 'create' || context.method === 'patch' || context.method === 'update') {
        const resolvers = settings instanceof resolver_1.Resolver ? [settings] : [settings[context.method]];
        const ctx = getContext(context);
        const data = context.data;
        const status = {
            originalContext: context
        };
        if (Array.isArray(data)) {
            context.data = await Promise.all(data.map((current) => runResolvers(resolvers, current, ctx, status)));
        }
        else {
            context.data = await runResolvers(resolvers, data, ctx, status);
        }
    }
    if (typeof next === 'function') {
        return next();
    }
};
exports.resolveData = resolveData;
const resolveResult = (...resolvers) => async (context, next) => {
    var _a;
    if (typeof next === 'function') {
        const { $resolve: properties, ...query } = ((_a = context.params) === null || _a === void 0 ? void 0 : _a.query) || {};
        const resolve = {
            originalContext: context,
            ...context.params.resolve,
            properties
        };
        context.params = {
            ...context.params,
            resolve,
            query
        };
        await next();
    }
    const ctx = getContext(context);
    const status = context.params.resolve;
    const { isPaginated, data } = getData(context);
    const result = Array.isArray(data)
        ? await Promise.all(data.map(async (current) => runResolvers(resolvers, current, ctx, status)))
        : await runResolvers(resolvers, data, ctx, status);
    if (isPaginated) {
        context.result.data = result;
    }
    else {
        context.result = result;
    }
};
exports.resolveResult = resolveResult;
const resolveDispatch = (...resolvers) => async (context, next) => {
    if (typeof next === 'function') {
        await next();
    }
    const ctx = getContext(context);
    const status = context.params.resolve;
    const { isPaginated, data } = getData(context);
    const resolveAndGetDispatch = async (current) => {
        const resolved = await runResolvers(resolvers, current, ctx, status);
        return Object.keys(resolved).reduce((res, key) => {
            res[key] = (0, exports.getDispatch)(resolved[key]);
            return res;
        }, {});
    };
    const result = await (Array.isArray(data)
        ? Promise.all(data.map(resolveAndGetDispatch))
        : resolveAndGetDispatch(data));
    const dispatch = isPaginated
        ? {
            ...context.result,
            data: result
        }
        : result;
    context.dispatch = dispatch;
    Object.defineProperty(context.result, exports.DISPATCH, {
        value: dispatch,
        enumerable: false,
        configurable: false
    });
};
exports.resolveDispatch = resolveDispatch;
const resolveAll = (map) => {
    const middleware = [];
    middleware.push((0, exports.resolveDispatch)(map.dispatch));
    if (map.result) {
        middleware.push((0, exports.resolveResult)(map.result));
    }
    if (map.query) {
        middleware.push((0, exports.resolveQuery)(map.query));
    }
    if (map.data) {
        middleware.push((0, exports.resolveData)(map.data));
    }
    return (0, hooks_1.compose)(middleware);
};
exports.resolveAll = resolveAll;
//# sourceMappingURL=resolve.js.map