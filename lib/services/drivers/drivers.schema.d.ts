import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const driversSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    text: import("@sinclair/typebox").TString<string>;
}>;
export declare type Drivers = Static<typeof driversSchema>;
export declare const driversResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext<any>>;
export declare const driversExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext<any>>;
export declare const driversDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    text: import("@sinclair/typebox").TString<string>;
}>, ["text"]>;
export declare type DriversData = Static<typeof driversDataSchema>;
export declare const driversDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const driversDataResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext<any>>;
export declare const driversQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    text: import("@sinclair/typebox").TString<string>;
}>, ["id", "text"]>;
export declare const driversQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("text" | "id")[]>>;
}>, import("@sinclair/typebox").TObject<{
    text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>]>>;
}>]>;
export declare type DriversQuery = Static<typeof driversQuerySchema>;
export declare const driversQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const driversQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        text?: number | undefined;
        id?: number | undefined;
    } | undefined;
    $select?: ("text" | "id")[] | undefined;
} & {
    text?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    id?: number | {
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
}, HookContext<any>>;
