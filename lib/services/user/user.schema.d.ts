import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const userSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    phone: import("@sinclair/typebox").TString<string>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        ownerId: import("@sinclair/typebox").TString<string>;
        balance: import("@sinclair/typebox").TNumber;
    }>>>;
}>;
export type User = Static<typeof userSchema>;
export declare const userResolver: import("@feathersjs/schema").Resolver<{
    firstname?: string | undefined;
    lastname?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    wallet?: {
        ownerId: string;
        balance: number;
    } | undefined;
    id: string;
    phone: string;
}, HookContext<any>>;
export declare const userExternalResolver: import("@feathersjs/schema").Resolver<{
    firstname?: string | undefined;
    lastname?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    wallet?: {
        ownerId: string;
        balance: number;
    } | undefined;
    id: string;
    phone: string;
}, HookContext<any>>;
export declare const userDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    phone: import("@sinclair/typebox").TString<string>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        ownerId: import("@sinclair/typebox").TString<string>;
        balance: import("@sinclair/typebox").TNumber;
    }>>>;
}>, ["email", "password"]>;
export type UserData = Static<typeof userDataSchema>;
export declare const userDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const userDataResolver: import("@feathersjs/schema").Resolver<{
    firstname?: string | undefined;
    lastname?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    wallet?: {
        ownerId: string;
        balance: number;
    } | undefined;
    id: string;
    phone: string;
}, HookContext<any>>;
export declare const userPatchSchema: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    phone: import("@sinclair/typebox").TString<string>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        ownerId: import("@sinclair/typebox").TString<string>;
        balance: import("@sinclair/typebox").TNumber;
    }>>>;
}>, ["id", "wallet"]>;
export type UserPatch = Static<typeof userPatchSchema>;
export declare const userPatchValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const userPatchResolver: import("@feathersjs/schema").Resolver<{
    firstname?: string | undefined;
    lastname?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    wallet?: {
        ownerId: string;
        balance: number;
    } | undefined;
    id: string;
    phone: string;
}, HookContext<any>>;
export declare const userQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    phone: import("@sinclair/typebox").TString<string>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        ownerId: import("@sinclair/typebox").TString<string>;
        balance: import("@sinclair/typebox").TNumber;
    }>>>;
}>, ["id", "email"]>;
export declare const userQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "email")[]>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>>]>>;
    }>>>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
    }>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type UserQuery = Static<typeof userQuerySchema>;
export declare const userQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const userQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        email?: number | undefined;
    };
    $select: ("id" | "email")[];
    $or: {
        id?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        email?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        }> | undefined;
    }[];
    $and: {
        id?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        email?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        }> | undefined;
    }[];
}> & {
    id?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    email?: string | Partial<{
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in: string[];
        $nin: string[];
    }> | undefined;
} & {}, HookContext<any>>;
