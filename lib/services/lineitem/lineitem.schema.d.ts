import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const lineitemSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    productId: import("@sinclair/typebox").TString<string>;
    price: import("@sinclair/typebox").TNumber;
    discount: import("@sinclair/typebox").TNumber;
    finalItemPrice: import("@sinclair/typebox").TNumber;
    quantity: import("@sinclair/typebox").TNumber;
    finalPrice: import("@sinclair/typebox").TNumber;
}>;
export declare type Lineitem = Static<typeof lineitemSchema>;
export declare const lineitemResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    productId: string;
    price: number;
    discount: number;
    finalItemPrice: number;
    quantity: number;
    finalPrice: number;
}, HookContext<any>>;
export declare const lineitemExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    productId: string;
    price: number;
    discount: number;
    finalItemPrice: number;
    quantity: number;
    finalPrice: number;
}, HookContext<any>>;
export declare const lineitemDataSchema: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    productId: import("@sinclair/typebox").TString<string>;
    price: import("@sinclair/typebox").TNumber;
    discount: import("@sinclair/typebox").TNumber;
    finalItemPrice: import("@sinclair/typebox").TNumber;
    quantity: import("@sinclair/typebox").TNumber;
    finalPrice: import("@sinclair/typebox").TNumber;
}>, ["id"]>;
export declare type LineitemData = Static<typeof lineitemDataSchema>;
export declare const lineitemDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const lineitemDataResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    productId: string;
    price: number;
    discount: number;
    finalItemPrice: number;
    quantity: number;
    finalPrice: number;
}, HookContext<any>>;
export declare const lineitemQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    productId: import("@sinclair/typebox").TString<string>;
    price: import("@sinclair/typebox").TNumber;
    discount: import("@sinclair/typebox").TNumber;
    finalItemPrice: import("@sinclair/typebox").TNumber;
    quantity: import("@sinclair/typebox").TNumber;
    finalPrice: import("@sinclair/typebox").TNumber;
}>, []>;
export declare const lineitemQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        finalItemPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        finalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("id" | "productId" | "price" | "discount" | "finalItemPrice" | "quantity" | "finalPrice")[]>>;
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
    productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>]>>;
    discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>]>>;
    finalItemPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>]>>;
    quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>]>>;
    finalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>]>>;
}>]>;
export declare type LineitemQuery = Static<typeof lineitemQuerySchema>;
export declare const lineitemQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const lineitemQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        id?: number | undefined;
        productId?: number | undefined;
        price?: number | undefined;
        discount?: number | undefined;
        finalItemPrice?: number | undefined;
        quantity?: number | undefined;
        finalPrice?: number | undefined;
    } | undefined;
    $select?: ("id" | "productId" | "price" | "discount" | "finalItemPrice" | "quantity" | "finalPrice")[] | undefined;
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
    productId?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    price?: number | {
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
    discount?: number | {
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
    finalItemPrice?: number | {
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
    quantity?: number | {
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
    finalPrice?: number | {
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
}, HookContext<any>>;
