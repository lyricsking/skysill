import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const brolesSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    businesId: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    role: import("@sinclair/typebox").TEnum<{
        manager: string;
        assistance: string;
    }>;
}>;
export declare type Broles = Static<typeof brolesSchema>;
export declare const brolesResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    shopId: string;
    businesId: string;
    role: string;
}, HookContext<any>>;
export declare const brolesExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    shopId: string;
    businesId: string;
    role: string;
}, HookContext<any>>;
export declare const brolesDataSchema: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    businesId: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    role: import("@sinclair/typebox").TEnum<{
        manager: string;
        assistance: string;
    }>;
}>, ["id"]>;
export declare type BrolesData = Static<typeof brolesDataSchema>;
export declare const brolesDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const brolesDataResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    shopId: string;
    businesId: string;
    role: string;
}, HookContext<any>>;
export declare const brolesQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    businesId: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    role: import("@sinclair/typebox").TEnum<{
        manager: string;
        assistance: string;
    }>;
}>, []>;
export declare const brolesQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        businesId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("id" | "shopId" | "businesId" | "role")[]>>;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>]>>;
    shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
    businesId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<{
        manager: string;
        assistance: string;
    }>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>>>;
    }>]>>;
}>]>;
export declare type BrolesQuery = Static<typeof brolesQuerySchema>;
export declare const brolesQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const brolesQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        id?: number | undefined;
        shopId?: number | undefined;
        businesId?: number | undefined;
        role?: number | undefined;
    } | undefined;
    $select?: ("id" | "shopId" | "businesId" | "role")[] | undefined;
} & {
    id?: number | {
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
    shopId?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    businesId?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    role?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
}, HookContext<any>>;
