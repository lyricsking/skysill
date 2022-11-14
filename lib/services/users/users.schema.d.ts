import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const userSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    phone: import("@sinclair/typebox").TString<string>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export declare type User = Static<typeof userSchema>;
export declare const userResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    email?: string | undefined;
    id: number;
    phone: string;
}, HookContext<any>>;
export declare const userExternalResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    email?: string | undefined;
    id: number;
    phone: string;
}, HookContext<any>>;
export declare const userDataSchema: import("@sinclair/typebox").TObject<{
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    phone: import("@sinclair/typebox").TString<string>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    password: import("@sinclair/typebox").TString<string>;
}>;
export declare type UserData = Static<typeof userDataSchema>;
export declare const userDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const userDataResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    email?: string | undefined;
    id: number;
    phone: string;
}, HookContext<any>>;
export declare const userQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    phone: import("@sinclair/typebox").TString<string>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, ["password"]>;
export declare const userQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("id" | "firstname" | "lastname" | "phone" | "email")[]>>;
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
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>>;
    }>]>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>>;
    }>]>>;
    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>>;
    }>]>>;
}>]>;
export declare type UserQuery = Static<typeof userQuerySchema>;
export declare const userQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const userQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        id?: number | undefined;
        firstname?: number | undefined;
        lastname?: number | undefined;
        phone?: number | undefined;
        email?: number | undefined;
    } | undefined;
    $select?: ("id" | "firstname" | "lastname" | "phone" | "email")[] | undefined;
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
}, HookContext<any>>;
