import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const walletsSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    walletableId: import("@sinclair/typebox").TString<string>;
    walletableType: import("@sinclair/typebox").TString<string>;
    balance: import("@sinclair/typebox").TNumber;
}>;
export declare type Wallets = Static<typeof walletsSchema>;
export declare const walletsResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    walletableId: string;
    walletableType: string;
    balance: number;
}, HookContext<any>>;
export declare const walletsExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    walletableId: string;
    walletableType: string;
    balance: number;
}, HookContext<any>>;
export declare const walletsDataSchema: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    walletableId: import("@sinclair/typebox").TString<string>;
    walletableType: import("@sinclair/typebox").TString<string>;
    balance: import("@sinclair/typebox").TNumber;
}>, ["id"]>;
export declare type WalletsData = Static<typeof walletsDataSchema>;
export declare const walletsDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const walletsDataResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    walletableId: string;
    walletableType: string;
    balance: number;
}, HookContext<any>>;
export declare const walletsQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    walletableId: import("@sinclair/typebox").TString<string>;
    walletableType: import("@sinclair/typebox").TString<string>;
    balance: import("@sinclair/typebox").TNumber;
}>, ["balance"]>;
export declare const walletsQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        walletableId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        walletableType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("id" | "walletableId" | "walletableType")[]>>;
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
    walletableId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
    walletableType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
}>]>;
export declare type WalletsQuery = Static<typeof walletsQuerySchema>;
export declare const walletsQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const walletsQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        id?: number | undefined;
        walletableId?: number | undefined;
        walletableType?: number | undefined;
    } | undefined;
    $select?: ("id" | "walletableId" | "walletableType")[] | undefined;
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
    walletableId?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    walletableType?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
}, HookContext<any>>;
