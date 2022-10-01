"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySyntax = exports.queryProperties = exports.queryProperty = void 0;
const commons_1 = require("@feathersjs/commons");
const queryProperty = (def) => {
    const definition = commons_1._.omit(def, 'default');
    return {
        anyOf: [
            definition,
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    $gt: definition,
                    $gte: definition,
                    $lt: definition,
                    $lte: definition,
                    $ne: definition,
                    $in: {
                        type: 'array',
                        items: definition
                    },
                    $nin: {
                        type: 'array',
                        items: definition
                    }
                }
            }
        ]
    };
};
exports.queryProperty = queryProperty;
const queryProperties = (definition) => Object.keys(definition).reduce((res, key) => {
    const result = res;
    result[key] = (0, exports.queryProperty)(definition[key]);
    return result;
}, {});
exports.queryProperties = queryProperties;
const querySyntax = (definition) => ({
    $limit: {
        type: 'number',
        minimum: 0
    },
    $skip: {
        type: 'number',
        minimum: 0
    },
    $sort: {
        type: 'object',
        properties: Object.keys(definition).reduce((res, key) => {
            const result = res;
            result[key] = {
                type: 'number',
                enum: [1, -1]
            };
            return result;
        }, {})
    },
    $select: {
        type: 'array',
        items: {
            type: 'string',
            enum: Object.keys(definition)
        }
    },
    ...(0, exports.queryProperties)(definition)
});
exports.querySyntax = querySyntax;
//# sourceMappingURL=query.js.map