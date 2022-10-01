import { JSONSchema } from 'json-schema-to-ts';
export declare type PropertyQuery<D extends JSONSchema> = {
    anyOf: [
        D,
        {
            type: 'object';
            additionalProperties: false;
            properties: {
                $gt: D;
                $gte: D;
                $lt: D;
                $lte: D;
                $ne: D;
                $in: {
                    type: 'array';
                    items: D;
                };
                $nin: {
                    type: 'array';
                    items: D;
                };
            };
        }
    ];
};
export declare const queryProperty: <T extends import("json-schema-to-ts").JSONSchema7>(def: T) => {
    readonly anyOf: readonly [any, {
        readonly type: "object";
        readonly additionalProperties: false;
        readonly properties: {
            readonly $gt: any;
            readonly $gte: any;
            readonly $lt: any;
            readonly $lte: any;
            readonly $ne: any;
            readonly $in: {
                readonly type: "array";
                readonly items: any;
            };
            readonly $nin: {
                readonly type: "array";
                readonly items: any;
            };
        };
    }];
};
export declare const queryProperties: <T extends {
    [key: string]: import("json-schema-to-ts").JSONSchema7;
}>(definition: T) => { [K in keyof T]: PropertyQuery<T[K]>; };
export declare const querySyntax: <T extends {
    [key: string]: any;
}>(definition: T) => {
    readonly $limit: {
        readonly type: "number";
        readonly minimum: 0;
    };
    readonly $skip: {
        readonly type: "number";
        readonly minimum: 0;
    };
    readonly $sort: {
        readonly type: "object";
        readonly properties: { [K in keyof T]: {
            readonly type: 'number';
            readonly enum: [1, -1];
        }; };
    };
    readonly $select: {
        readonly type: "array";
        readonly items: {
            readonly type: "string";
            readonly enum: (keyof T)[];
        };
    };
} & { [K_1 in keyof T]: PropertyQuery<T[K_1]>; };
