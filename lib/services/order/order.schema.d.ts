import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const OrderStatus: {
    cart: string;
    pending: string;
    accepted: string;
    confirmed: string;
    assigned: string;
    awaitingPickup: string;
    inTransit: string;
    delivered: string;
    cancelled: string;
};
export type OrderStatus = typeof OrderStatus;
export declare const orderSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    shopperId: import("@sinclair/typebox").TString<string>;
    subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    deliveryGeopoint: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    orderStatus: import("@sinclair/typebox").TUnsafe<string>;
    lineItems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        productId: import("@sinclair/typebox").TString<string>;
        orderId: import("@sinclair/typebox").TString<string>;
        optionsId: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        price: import("@sinclair/typebox").TNumber;
        discount: import("@sinclair/typebox").TNumber;
        finalItemPrice: import("@sinclair/typebox").TNumber;
        quantity: import("@sinclair/typebox").TNumber;
        finalPrice: import("@sinclair/typebox").TNumber;
    }>>>;
}>;
export type Order = Static<typeof orderSchema>;
export declare const orderResolver: import("@feathersjs/schema").Resolver<{
    subtotal?: number | undefined;
    deliveryFee?: number | undefined;
    deliveryAddress?: string | undefined;
    deliveryGeopoint?: string | undefined;
    id: string;
    shopId: string;
    shopperId: string;
    orderStatus: string;
    lineItems: {
        id: number;
        productId: string;
        orderId: string;
        optionsId: string[];
        price: number;
        discount: number;
        finalItemPrice: number;
        quantity: number;
        finalPrice: number;
    }[];
}, HookContext<any>>;
export declare const orderExternalResolver: import("@feathersjs/schema").Resolver<{
    subtotal?: number | undefined;
    deliveryFee?: number | undefined;
    deliveryAddress?: string | undefined;
    deliveryGeopoint?: string | undefined;
    id: string;
    shopId: string;
    shopperId: string;
    orderStatus: string;
    lineItems: {
        id: number;
        productId: string;
        orderId: string;
        optionsId: string[];
        price: number;
        discount: number;
        finalItemPrice: number;
        quantity: number;
        finalPrice: number;
    }[];
}, HookContext<any>>;
export declare const orderDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    shopperId: import("@sinclair/typebox").TString<string>;
    subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    deliveryGeopoint: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    orderStatus: import("@sinclair/typebox").TUnsafe<string>;
    lineItems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        productId: import("@sinclair/typebox").TString<string>;
        orderId: import("@sinclair/typebox").TString<string>;
        optionsId: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        price: import("@sinclair/typebox").TNumber;
        discount: import("@sinclair/typebox").TNumber;
        finalItemPrice: import("@sinclair/typebox").TNumber;
        quantity: import("@sinclair/typebox").TNumber;
        finalPrice: import("@sinclair/typebox").TNumber;
    }>>>;
}>, ["shopId", "shopperId"]>;
export type OrderData = Static<typeof orderDataSchema>;
export declare const orderDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const orderDataResolver: import("@feathersjs/schema").Resolver<{
    subtotal?: number | undefined;
    deliveryFee?: number | undefined;
    deliveryAddress?: string | undefined;
    deliveryGeopoint?: string | undefined;
    id: string;
    shopId: string;
    shopperId: string;
    orderStatus: string;
    lineItems: {
        id: number;
        productId: string;
        orderId: string;
        optionsId: string[];
        price: number;
        discount: number;
        finalItemPrice: number;
        quantity: number;
        finalPrice: number;
    }[];
}, HookContext<any>>;
export declare const orderPatchSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    shopperId: import("@sinclair/typebox").TString<string>;
    subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    deliveryGeopoint: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    orderStatus: import("@sinclair/typebox").TUnsafe<string>;
    lineItems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        productId: import("@sinclair/typebox").TString<string>;
        orderId: import("@sinclair/typebox").TString<string>;
        optionsId: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        price: import("@sinclair/typebox").TNumber;
        discount: import("@sinclair/typebox").TNumber;
        finalItemPrice: import("@sinclair/typebox").TNumber;
        quantity: import("@sinclair/typebox").TNumber;
        finalPrice: import("@sinclair/typebox").TNumber;
    }>>>;
}>, ["deliveryAddress", "deliveryGeopoint", "orderStatus"]>;
export type OrderPatch = Static<typeof orderPatchSchema>;
export declare const orderPatchValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const orderPatchResolver: import("@feathersjs/schema").Resolver<{
    subtotal?: number | undefined;
    deliveryFee?: number | undefined;
    deliveryAddress?: string | undefined;
    deliveryGeopoint?: string | undefined;
    id: string;
    shopId: string;
    shopperId: string;
    orderStatus: string;
    lineItems: {
        id: number;
        productId: string;
        orderId: string;
        optionsId: string[];
        price: number;
        discount: number;
        finalItemPrice: number;
        quantity: number;
        finalPrice: number;
    }[];
}, HookContext<any>>;
export declare const orderQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    shopId: import("@sinclair/typebox").TString<string>;
    shopperId: import("@sinclair/typebox").TString<string>;
    subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    deliveryAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    deliveryGeopoint: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    orderStatus: import("@sinclair/typebox").TUnsafe<string>;
    lineItems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        productId: import("@sinclair/typebox").TString<string>;
        orderId: import("@sinclair/typebox").TString<string>;
        optionsId: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        price: import("@sinclair/typebox").TNumber;
        discount: import("@sinclair/typebox").TNumber;
        finalItemPrice: import("@sinclair/typebox").TNumber;
        quantity: import("@sinclair/typebox").TNumber;
        finalPrice: import("@sinclair/typebox").TNumber;
    }>>>;
}>, ["lineItems"]>;
export declare const orderQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        shopperId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        deliveryAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        deliveryGeopoint: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        orderStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "shopId" | "shopperId" | "subtotal" | "deliveryFee" | "deliveryAddress" | "deliveryGeopoint" | "orderStatus")[]>;
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
        shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        shopperId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
        }>>]>>;
        deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
        }>>]>>;
        deliveryAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>>]>>;
        deliveryGeopoint: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>>]>>;
        orderStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnsafe<string>;
            $gte: import("@sinclair/typebox").TUnsafe<string>;
            $lt: import("@sinclair/typebox").TUnsafe<string>;
            $lte: import("@sinclair/typebox").TUnsafe<string>;
            $ne: import("@sinclair/typebox").TUnsafe<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<string>>;
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
        shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        shopperId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
        }>>]>>;
        deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
        }>>]>>;
        deliveryAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>>]>>;
        deliveryGeopoint: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        }>>]>>;
        orderStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnsafe<string>;
            $gte: import("@sinclair/typebox").TUnsafe<string>;
            $lt: import("@sinclair/typebox").TUnsafe<string>;
            $lte: import("@sinclair/typebox").TUnsafe<string>;
            $ne: import("@sinclair/typebox").TUnsafe<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<string>>;
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
    shopId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    shopperId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
    }>>]>>;
    deliveryFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
    }>>]>>;
    deliveryAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
    }>>]>>;
    deliveryGeopoint: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
    }>>]>>;
    orderStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnsafe<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TUnsafe<string>;
        $gte: import("@sinclair/typebox").TUnsafe<string>;
        $lt: import("@sinclair/typebox").TUnsafe<string>;
        $lte: import("@sinclair/typebox").TUnsafe<string>;
        $ne: import("@sinclair/typebox").TUnsafe<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnsafe<string>>;
    }>>]>>;
}>>]>;
export type OrderQuery = Static<typeof orderQuerySchema>;
export declare const orderQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const orderQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        shopId?: number | undefined;
        shopperId?: number | undefined;
        subtotal?: number | undefined;
        deliveryFee?: number | undefined;
        deliveryAddress?: number | undefined;
        deliveryGeopoint?: number | undefined;
        orderStatus?: number | undefined;
    };
    $select: ("id" | "shopId" | "shopperId" | "subtotal" | "deliveryFee" | "deliveryAddress" | "deliveryGeopoint" | "orderStatus")[];
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
        shopId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        shopperId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        subtotal?: number | Partial<{
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in: number[];
            $nin: number[];
        }> | undefined;
        deliveryFee?: number | Partial<{
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in: number[];
            $nin: number[];
        }> | undefined;
        deliveryAddress?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        }> | undefined;
        deliveryGeopoint?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        }> | undefined;
        orderStatus?: string | Partial<{
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
        id?: string | Partial<{
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
        shopperId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        subtotal?: number | Partial<{
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in: number[];
            $nin: number[];
        }> | undefined;
        deliveryFee?: number | Partial<{
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in: number[];
            $nin: number[];
        }> | undefined;
        deliveryAddress?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        }> | undefined;
        deliveryGeopoint?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string[];
            $nin: string[];
        }> | undefined;
        orderStatus?: string | Partial<{
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
    id?: string | Partial<{
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
    shopperId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    subtotal?: number | Partial<{
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in: number[];
        $nin: number[];
    }> | undefined;
    deliveryFee?: number | Partial<{
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in: number[];
        $nin: number[];
    }> | undefined;
    deliveryAddress?: string | Partial<{
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in: string[];
        $nin: string[];
    }> | undefined;
    deliveryGeopoint?: string | Partial<{
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in: string[];
        $nin: string[];
    }> | undefined;
    orderStatus?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
}, HookContext<any>>;
