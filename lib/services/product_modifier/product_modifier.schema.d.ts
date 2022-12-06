import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const productModifierSchema: import("@sinclair/typebox").TObject<{
    productId: import("@sinclair/typebox").TString<string>;
    modifierId: import("@sinclair/typebox").TString<string>;
}>;
export declare type ProductModifier = Static<typeof productModifierSchema>;
export declare const productModifierResolver: import("@feathersjs/schema").Resolver<{
    productId: string;
    modifierId: string;
}, HookContext<any>>;
export declare const productModifierExternalResolver: import("@feathersjs/schema").Resolver<{
    productId: string;
    modifierId: string;
}, HookContext<any>>;
export declare const productModifierDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    productId: import("@sinclair/typebox").TString<string>;
    modifierId: import("@sinclair/typebox").TString<string>;
}>, ["productId", "modifierId"]>;
export declare type ProductModifierData = Static<typeof productModifierDataSchema>;
export declare const productModifierDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const productModifierDataResolver: import("@feathersjs/schema").Resolver<{
    productId: string;
    modifierId: string;
}, HookContext<any>>;
export declare const productModifierQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    productId: import("@sinclair/typebox").TString<string>;
    modifierId: import("@sinclair/typebox").TString<string>;
}>, ["productId", "modifierId"]>;
export declare const productModifierQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        modifierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("productId" | "modifierId")[]>>;
}>, import("@sinclair/typebox").TObject<{
    productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
    modifierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
}>]>;
export declare type ProductModifierQuery = Static<typeof productModifierQuerySchema>;
export declare const productModifierQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const productModifierQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        productId?: number | undefined;
        modifierId?: number | undefined;
    } | undefined;
    $select?: ("productId" | "modifierId")[] | undefined;
} & {
    productId?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    modifierId?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
}, HookContext<any>>;
