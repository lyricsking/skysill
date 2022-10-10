import type { Infer } from '@feathersjs/schema';
export declare const usersDataSchema: import("@feathersjs/schema").SchemaWrapper<{
    readonly $id: "UsersData";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["firstname", "lastname", "phone"];
    readonly properties: {
        readonly firstname: {
            readonly type: "string";
        };
        readonly lastname: {
            readonly type: "string";
        };
        readonly phone: {
            readonly type: "string";
        };
        readonly email: {
            readonly type: "string";
        };
        readonly password: {
            readonly type: "string";
        };
    };
}>;
export declare type UsersData = Infer<typeof usersDataSchema>;
export declare const usersPatchSchema: import("@feathersjs/schema").SchemaWrapper<{
    readonly $id: "UsersPatch";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly [];
    readonly properties: {
        readonly firstname: {
            readonly type: "string";
        };
        readonly lastname: {
            readonly type: "string";
        };
        readonly phone: {
            readonly type: "string";
        };
        readonly email: {
            readonly type: "string";
        };
        readonly password: {
            readonly type: "string";
        };
    };
}>;
export declare type UsersPatch = Infer<typeof usersPatchSchema>;
export declare const usersResultSchema: import("@feathersjs/schema").SchemaWrapper<{
    readonly $id: "UsersResult";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["id"];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly firstname: {
            readonly type: "string";
        };
        readonly lastname: {
            readonly type: "string";
        };
        readonly phone: {
            readonly type: "string";
        };
        readonly email: {
            readonly type: "string";
        };
        readonly password: {
            readonly type: "string";
        };
    };
}>;
export declare type UsersResult = Infer<typeof usersResultSchema>;
export declare const usersQuerySchema: import("@feathersjs/schema").SchemaWrapper<{
    readonly $id: "UsersQuery";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
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
            readonly properties: {
                id: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                firstname: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                lastname: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                phone: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                email: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
            };
        };
        readonly $select: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
                readonly enum: ("id" | "firstname" | "lastname" | "phone" | "email")[];
            };
        };
        readonly id: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "number";
        }>;
        readonly firstname: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }>;
        readonly lastname: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }>;
        readonly phone: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }>;
        readonly email: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }>;
    };
}>;
export declare type UsersQuery = Infer<typeof usersQuerySchema>;
