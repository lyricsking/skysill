import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const shopSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    shopName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    coordinate: import("@sinclair/typebox").TString<string>;
    business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<string>;
        ownerId: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        contactName: import("@sinclair/typebox").TString<string>;
        contactPhone: import("@sinclair/typebox").TString<string>;
        contactEmail: import("@sinclair/typebox").TString<string>;
    }>>>;
}>;
export declare type Shop = Static<typeof shopSchema>;
export declare const shopResolver: import("@feathersjs/schema").Resolver<{
    business?: {
        id: string;
        name: string;
        ownerId: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
    } | undefined;
    id: number;
    description: string;
    shopName: string;
    coordinate: string;
}, HookContext<any>>;
export declare const shopExternalResolver: import("@feathersjs/schema").Resolver<{
    business?: {
        id: string;
        name: string;
        ownerId: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
    } | undefined;
    id: number;
    description: string;
    shopName: string;
    coordinate: string;
}, HookContext<any>>;
export declare const shopDataSchema: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    shopName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    coordinate: import("@sinclair/typebox").TString<string>;
    business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<string>;
        ownerId: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        contactName: import("@sinclair/typebox").TString<string>;
        contactPhone: import("@sinclair/typebox").TString<string>;
        contactEmail: import("@sinclair/typebox").TString<string>;
    }>>>;
}>, ["id", "business"]>;
export declare type ShopData = Static<typeof shopDataSchema>;
export declare const shopDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const shopDataResolver: import("@feathersjs/schema").Resolver<{
    business?: {
        id: string;
        name: string;
        ownerId: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
    } | undefined;
    id: number;
    description: string;
    shopName: string;
    coordinate: string;
}, HookContext<any>>;
export declare const shopQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    shopName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    coordinate: import("@sinclair/typebox").TString<string>;
    business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<string>;
        ownerId: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        contactName: import("@sinclair/typebox").TString<string>;
        contactPhone: import("@sinclair/typebox").TString<string>;
        contactEmail: import("@sinclair/typebox").TString<string>;
    }>>>;
}>, []>;
export declare const shopQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        shopName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        coordinate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("id" | "description" | "business" | "shopName" | "coordinate")[]>>;
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
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
    business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<string>;
        ownerId: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        contactName: import("@sinclair/typebox").TString<string>;
        contactPhone: import("@sinclair/typebox").TString<string>;
        contactEmail: import("@sinclair/typebox").TString<string>;
    }>>>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            ownerId: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            contactName: import("@sinclair/typebox").TString<string>;
            contactPhone: import("@sinclair/typebox").TString<string>;
            contactEmail: import("@sinclair/typebox").TString<string>;
        }>>>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            ownerId: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            contactName: import("@sinclair/typebox").TString<string>;
            contactPhone: import("@sinclair/typebox").TString<string>;
            contactEmail: import("@sinclair/typebox").TString<string>;
        }>>>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            ownerId: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            contactName: import("@sinclair/typebox").TString<string>;
            contactPhone: import("@sinclair/typebox").TString<string>;
            contactEmail: import("@sinclair/typebox").TString<string>;
        }>>>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            ownerId: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            contactName: import("@sinclair/typebox").TString<string>;
            contactPhone: import("@sinclair/typebox").TString<string>;
            contactEmail: import("@sinclair/typebox").TString<string>;
        }>>>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            ownerId: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            contactName: import("@sinclair/typebox").TString<string>;
            contactPhone: import("@sinclair/typebox").TString<string>;
            contactEmail: import("@sinclair/typebox").TString<string>;
        }>>>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            ownerId: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            contactName: import("@sinclair/typebox").TString<string>;
            contactPhone: import("@sinclair/typebox").TString<string>;
            contactEmail: import("@sinclair/typebox").TString<string>;
        }>>>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString<string>;
            ownerId: import("@sinclair/typebox").TString<string>;
            name: import("@sinclair/typebox").TString<string>;
            contactName: import("@sinclair/typebox").TString<string>;
            contactPhone: import("@sinclair/typebox").TString<string>;
            contactEmail: import("@sinclair/typebox").TString<string>;
        }>>>>>;
    }>]>>;
    shopName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
    coordinate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
}>]>;
export declare type ShopQuery = Static<typeof shopQuerySchema>;
export declare const shopQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shopQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        id?: number | undefined;
        description?: number | undefined;
        business?: number | undefined;
        shopName?: number | undefined;
        coordinate?: number | undefined;
    } | undefined;
    $select?: ("id" | "description" | "business" | "shopName" | "coordinate")[] | undefined;
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
    description?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    business?: {
        id: string;
        name: string;
        ownerId: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
    } | {
        $gt?: {
            id: string;
            name: string;
            ownerId: string;
            contactName: string;
            contactPhone: string;
            contactEmail: string;
        } | undefined;
        $gte?: {
            id: string;
            name: string;
            ownerId: string;
            contactName: string;
            contactPhone: string;
            contactEmail: string;
        } | undefined;
        $lt?: {
            id: string;
            name: string;
            ownerId: string;
            contactName: string;
            contactPhone: string;
            contactEmail: string;
        } | undefined;
        $lte?: {
            id: string;
            name: string;
            ownerId: string;
            contactName: string;
            contactPhone: string;
            contactEmail: string;
        } | undefined;
        $ne?: {
            id: string;
            name: string;
            ownerId: string;
            contactName: string;
            contactPhone: string;
            contactEmail: string;
        } | undefined;
        $in?: {
            id: string;
            name: string;
            ownerId: string;
            contactName: string;
            contactPhone: string;
            contactEmail: string;
        }[] | undefined;
        $nin?: {
            id: string;
            name: string;
            ownerId: string;
            contactName: string;
            contactPhone: string;
            contactEmail: string;
        }[] | undefined;
    } | undefined;
    shopName?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    coordinate?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
}, HookContext<any>>;
