import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const modifierSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    businessId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    minSelectable: import("@sinclair/typebox").TInteger;
    maxSelectable: import("@sinclair/typebox").TInteger;
    noFree: import("@sinclair/typebox").TInteger;
}>;
export type Modifier = Static<typeof modifierSchema>;
export declare const modifierResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    name: string;
    businessId: string;
    minSelectable: number;
    maxSelectable: number;
    noFree: number;
}, HookContext<any>>;
export declare const modifierExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    name: string;
    businessId: string;
    minSelectable: number;
    maxSelectable: number;
    noFree: number;
}, HookContext<any>>;
export declare const modifierDataSchema: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    businessId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    minSelectable: import("@sinclair/typebox").TInteger;
    maxSelectable: import("@sinclair/typebox").TInteger;
    noFree: import("@sinclair/typebox").TInteger;
}>, ["id"]>;
export type ModifierData = Static<typeof modifierDataSchema>;
export declare const modifierDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const modifierDataResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    name: string;
    businessId: string;
    minSelectable: number;
    maxSelectable: number;
    noFree: number;
}, HookContext<any>>;
export declare const modifierQueryProperties: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    businessId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    minSelectable: import("@sinclair/typebox").TInteger;
    maxSelectable: import("@sinclair/typebox").TInteger;
    noFree: import("@sinclair/typebox").TInteger;
}>;
export declare const modifierQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        businessId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        minSelectable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        maxSelectable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        noFree: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "name" | "businessId" | "minSelectable" | "maxSelectable" | "noFree")[]>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>>]>>;
        businessId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        minSelectable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TInteger, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TInteger;
            $gte: import("@sinclair/typebox").TInteger;
            $lt: import("@sinclair/typebox").TInteger;
            $lte: import("@sinclair/typebox").TInteger;
            $ne: import("@sinclair/typebox").TInteger;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
        }>>]>>;
        maxSelectable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TInteger, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TInteger;
            $gte: import("@sinclair/typebox").TInteger;
            $lt: import("@sinclair/typebox").TInteger;
            $lte: import("@sinclair/typebox").TInteger;
            $ne: import("@sinclair/typebox").TInteger;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
        }>>]>>;
        noFree: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TInteger, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TInteger;
            $gte: import("@sinclair/typebox").TInteger;
            $lt: import("@sinclair/typebox").TInteger;
            $lte: import("@sinclair/typebox").TInteger;
            $ne: import("@sinclair/typebox").TInteger;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
        }>>]>>;
    }>>>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>>]>>;
        businessId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        minSelectable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TInteger, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TInteger;
            $gte: import("@sinclair/typebox").TInteger;
            $lt: import("@sinclair/typebox").TInteger;
            $lte: import("@sinclair/typebox").TInteger;
            $ne: import("@sinclair/typebox").TInteger;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
        }>>]>>;
        maxSelectable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TInteger, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TInteger;
            $gte: import("@sinclair/typebox").TInteger;
            $lt: import("@sinclair/typebox").TInteger;
            $lte: import("@sinclair/typebox").TInteger;
            $ne: import("@sinclair/typebox").TInteger;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
        }>>]>>;
        noFree: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TInteger, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TInteger;
            $gte: import("@sinclair/typebox").TInteger;
            $lt: import("@sinclair/typebox").TInteger;
            $lte: import("@sinclair/typebox").TInteger;
            $ne: import("@sinclair/typebox").TInteger;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
        }>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>>]>>;
    businessId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    minSelectable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TInteger, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TInteger;
        $gte: import("@sinclair/typebox").TInteger;
        $lt: import("@sinclair/typebox").TInteger;
        $lte: import("@sinclair/typebox").TInteger;
        $ne: import("@sinclair/typebox").TInteger;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
    }>>]>>;
    maxSelectable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TInteger, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TInteger;
        $gte: import("@sinclair/typebox").TInteger;
        $lt: import("@sinclair/typebox").TInteger;
        $lte: import("@sinclair/typebox").TInteger;
        $ne: import("@sinclair/typebox").TInteger;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
    }>>]>>;
    noFree: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TInteger, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TInteger;
        $gte: import("@sinclair/typebox").TInteger;
        $lt: import("@sinclair/typebox").TInteger;
        $lte: import("@sinclair/typebox").TInteger;
        $ne: import("@sinclair/typebox").TInteger;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TInteger>;
    }>>]>>;
}>>]>;
export type ModifierQuery = Static<typeof modifierQuerySchema>;
export declare const modifierQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const modifierQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        name?: number | undefined;
        businessId?: number | undefined;
        minSelectable?: number | undefined;
        maxSelectable?: number | undefined;
        noFree?: number | undefined;
    };
    $select: ("id" | "name" | "businessId" | "minSelectable" | "maxSelectable" | "noFree")[];
    $or: {
        id?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
        name?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        businessId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        minSelectable?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
        maxSelectable?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
        noFree?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
    }[];
    $and: {
        id?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
        name?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        businessId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        minSelectable?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
        maxSelectable?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
        noFree?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
    }[];
}> & {
    id?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    }> | undefined;
    name?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    businessId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    minSelectable?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    }> | undefined;
    maxSelectable?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    }> | undefined;
    noFree?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    }> | undefined;
}, HookContext<any>>;
