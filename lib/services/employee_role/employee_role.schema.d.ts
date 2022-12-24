import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const employeeRoleSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    businesId: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    role: import("@sinclair/typebox").TEnum<{
        manager: string;
        assistance: string;
    }>;
}>;
export type EmployeeRole = Static<typeof employeeRoleSchema>;
export declare const employeeRoleResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    role: string;
    shopId: string;
    businesId: string;
}, HookContext<any>>;
export declare const employeeRoleExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    role: string;
    shopId: string;
    businesId: string;
}, HookContext<any>>;
export declare const employeeRoleDataSchema: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    businesId: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    role: import("@sinclair/typebox").TEnum<{
        manager: string;
        assistance: string;
    }>;
}>, ["id"]>;
export type EmployeeRoleData = Static<typeof employeeRoleDataSchema>;
export declare const employeeRoleDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const employeeRoleDataResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    role: string;
    shopId: string;
    businesId: string;
}, HookContext<any>>;
export declare const employeeRoleQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    businesId: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    role: import("@sinclair/typebox").TEnum<{
        manager: string;
        assistance: string;
    }>;
}>, []>;
export declare const employeeRoleQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        businesId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "role" | "shopId" | "businesId")[]>;
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
        role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $gte: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $lt: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $lte: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $ne: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>>;
        }>>]>>;
        shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        businesId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
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
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>>]>>;
        role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $gte: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $lt: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $lte: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $ne: import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
                manager: string;
                assistance: string;
            }>>;
        }>>]>>;
        shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        businesId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
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
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>>]>>;
    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<{
        manager: string;
        assistance: string;
    }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>;
        $gte: import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>;
        $lt: import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>;
        $lte: import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>;
        $ne: import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
            manager: string;
            assistance: string;
        }>>;
    }>>]>>;
    shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    businesId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
}>>]>;
export type EmployeeRoleQuery = Static<typeof employeeRoleQuerySchema>;
export declare const employeeRoleQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const employeeRoleQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        role?: number | undefined;
        shopId?: number | undefined;
        businesId?: number | undefined;
    };
    $select: ("id" | "role" | "shopId" | "businesId")[];
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
        role?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        shopId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        businesId?: string | Partial<{
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
        id?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
        role?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        shopId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        businesId?: string | Partial<{
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
    id?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    }> | undefined;
    role?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    shopId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    businesId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
}, HookContext<any>>;
