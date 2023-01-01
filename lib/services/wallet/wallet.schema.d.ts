import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const walletSchema: import("@sinclair/typebox").TObject<{
    ownerId: import("@sinclair/typebox").TString<string>;
    balance: import("@sinclair/typebox").TNumber;
}>;
export type Wallet = Static<typeof walletSchema>;
export declare const walletResolver: import("@feathersjs/schema").Resolver<{
    ownerId: string;
    balance: number;
}, HookContext<any>>;
export declare const walletExternalResolver: import("@feathersjs/schema").Resolver<{
    ownerId: string;
    balance: number;
}, HookContext<any>>;
export declare const walletDataSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    ownerId: import("@sinclair/typebox").TString<string>;
    balance: import("@sinclair/typebox").TNumber;
}>, ["ownerId"]>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
}>]>;
export type WalletData = Static<typeof walletDataSchema>;
export declare const walletDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const walletDataResolver: import("@feathersjs/schema").Resolver<{
    ownerId: string;
    balance: number;
}, HookContext<any>>;
export declare const walletPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    ownerId: import("@sinclair/typebox").TString<string>;
    balance: import("@sinclair/typebox").TNumber;
}>>;
export type WalletPatch = Static<typeof walletPatchSchema>;
export declare const walletPatchValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const walletPatchResolver: import("@feathersjs/schema").Resolver<{
    ownerId: string;
    balance: number;
}, HookContext<any>>;
export declare const walletQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    ownerId: import("@sinclair/typebox").TString<string>;
    balance: import("@sinclair/typebox").TNumber;
}>, ["balance"]>;
export declare const walletQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        ownerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<"ownerId"[]>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        ownerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
    }>>>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        ownerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    ownerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type WalletQuery = Static<typeof walletQuerySchema>;
export declare const walletQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const walletQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        ownerId?: number | undefined;
    };
    $select: "ownerId"[];
    $or: {
        ownerId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
    }[];
    $and: {
        ownerId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
    }[];
}> & {
    ownerId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
} & {}, HookContext<any>>;
