import type { HookContext } from '../../declarations';
export declare const usersDataResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    email?: string | undefined;
    firstname: string;
    lastname: string;
    phone: string;
}, HookContext<any>>;
export declare const usersPatchResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
}, HookContext<any>>;
export declare const usersResultResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    id: number;
}, HookContext<any>>;
export declare const usersDispatchResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    id: number;
}, HookContext<any>>;
export declare const usersQueryResolver: import("@feathersjs/schema").Resolver<{
    id?: number | {
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
    firstname?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    lastname?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    phone?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    email?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        [x: string]: unknown;
        id?: 1 | -1 | undefined;
        firstname?: 1 | -1 | undefined;
        lastname?: 1 | -1 | undefined;
        phone?: 1 | -1 | undefined;
        email?: 1 | -1 | undefined;
    } | undefined;
    $select?: import("json-schema-to-ts/lib/utils").Writable<"id" | "firstname" | "lastname" | "phone" | "email">[] | undefined;
}, HookContext<any>>;
export declare const usersResolvers: {
    result: import("@feathersjs/schema").Resolver<{
        password?: string | undefined;
        firstname?: string | undefined;
        lastname?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        id: number;
    }, HookContext<any>>;
    dispatch: import("@feathersjs/schema").Resolver<{
        password?: string | undefined;
        firstname?: string | undefined;
        lastname?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        id: number;
    }, HookContext<any>>;
    data: {
        create: import("@feathersjs/schema").Resolver<{
            password?: string | undefined;
            email?: string | undefined;
            firstname: string;
            lastname: string;
            phone: string;
        }, HookContext<any>>;
        update: import("@feathersjs/schema").Resolver<{
            password?: string | undefined;
            email?: string | undefined;
            firstname: string;
            lastname: string;
            phone: string;
        }, HookContext<any>>;
        patch: import("@feathersjs/schema").Resolver<{
            password?: string | undefined;
            firstname?: string | undefined;
            lastname?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
        }, HookContext<any>>;
    };
    query: import("@feathersjs/schema").Resolver<{
        id?: number | {
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in?: number[] | undefined;
            $nin?: number[] | undefined;
        } | undefined;
        firstname?: string | {
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        lastname?: string | {
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        phone?: string | {
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        email?: string | {
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        $limit?: number | undefined;
        $skip?: number | undefined;
        $sort?: {
            [x: string]: unknown;
            id?: 1 | -1 | undefined;
            firstname?: 1 | -1 | undefined;
            lastname?: 1 | -1 | undefined;
            phone?: 1 | -1 | undefined;
            email?: 1 | -1 | undefined;
        } | undefined;
        $select?: import("json-schema-to-ts/lib/utils").Writable<"id" | "firstname" | "lastname" | "phone" | "email">[] | undefined;
    }, HookContext<any>>;
};
