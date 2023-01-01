import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const shipdayOrderSchema: import("@sinclair/typebox").TObject<{
    orderId: import("@sinclair/typebox").TNumber;
    orderNumber: import("@sinclair/typebox").TString<string>;
    companyId: import("@sinclair/typebox").TString<string>;
    areaId: import("@sinclair/typebox").TString<string>;
    customer: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        emailAddress: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>;
    restaurant: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>;
    assignedCarrier: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TInteger;
        personalId: import("@sinclair/typebox").TInteger;
        name: import("@sinclair/typebox").TString<string>;
        codeName: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        companyId: import("@sinclair/typebox").TInteger;
        areaId: import("@sinclair/typebox").TInteger;
        isOnShift: import("@sinclair/typebox").TBoolean;
        email: import("@sinclair/typebox").TString<string>;
        carrierPhoto: import("@sinclair/typebox").TString<string>;
        isActive: import("@sinclair/typebox").TBoolean;
    }>;
    distance: import("@sinclair/typebox").TString<"double">;
    activityLog: import("@sinclair/typebox").TObject<{
        placementTime: import("@sinclair/typebox").TString<"date-time">;
        expectedPickupTime: import("@sinclair/typebox").TString<"time">;
        expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
        expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
        assignedTime: import("@sinclair/typebox").TString<"date-time">;
        startTime: import("@sinclair/typebox").TString<"date-time">;
        pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
        arrivedTime: import("@sinclair/typebox").TString<"date-time">;
        deliveryTime: import("@sinclair/typebox").TString<"date-time">;
    }>;
    costing: import("@sinclair/typebox").TObject<{
        totalCost: import("@sinclair/typebox").TString<"double">;
        deliveryFee: import("@sinclair/typebox").TString<"double">;
        tip: import("@sinclair/typebox").TString<"double">;
        discountAmount: import("@sinclair/typebox").TString<"double">;
        tax: import("@sinclair/typebox").TString<"double">;
        cashTip: import("@sinclair/typebox").TString<"double">;
    }>;
    orderItems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TString<string>;
        unit: import("@sinclair/typebox").TString<"int32">;
        addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        details: import("@sinclair/typebox").TString<string>;
    }>>;
    assignedCarrierId: import("@sinclair/typebox").TString<"int32">;
    orderStatus: import("@sinclair/typebox").TObject<{
        imcomplete: import("@sinclair/typebox").TBoolean;
        accepted: import("@sinclair/typebox").TBoolean;
        orderState: import("@sinclair/typebox").TUnsafe<string>;
    }>;
    trackingLink: import("@sinclair/typebox").TString<"uri">;
    feedback: import("@sinclair/typebox").TString<string>;
    schedule: import("@sinclair/typebox").TBoolean;
    parentId: import("@sinclair/typebox").TString<"int32">;
    etaTime: import("@sinclair/typebox").TString<"time">;
    deliveryInstruction: import("@sinclair/typebox").TString<string>;
}>;
export type ShipdayOrder = Static<typeof shipdayOrderSchema>;
export declare const shipdayOrderResolver: import("@feathersjs/schema").Resolver<{
    feedback: string;
    orderStatus: {
        accepted: boolean;
        imcomplete: boolean;
        orderState: string;
    };
    orderId: number;
    orderNumber: string;
    companyId: string;
    areaId: string;
    customer: {
        address: string;
        name: string;
        phoneNumber: string;
        emailAddress: string;
        latitude: number;
        longitude: number;
    };
    restaurant: {
        id: number;
        address: string;
        name: string;
        phoneNumber: string;
        latitude: number;
        longitude: number;
    };
    assignedCarrier: {
        id: number;
        name: string;
        email: string;
        companyId: number;
        areaId: number;
        phoneNumber: string;
        personalId: number;
        codeName: string;
        isOnShift: boolean;
        carrierPhoto: string;
        isActive: boolean;
    };
    distance: string;
    activityLog: {
        startTime: string;
        placementTime: string;
        expectedPickupTime: string;
        expectedDeliveryDate: string;
        expectedDeliveryTime: string;
        assignedTime: string;
        pickedUpTime: string;
        arrivedTime: string;
        deliveryTime: string;
    };
    costing: {
        deliveryFee: string;
        totalCost: string;
        tip: string;
        discountAmount: string;
        tax: string;
        cashTip: string;
    };
    orderItems: {
        name: string;
        details: string;
        unit: string;
        quantity: string;
        addOns: string[];
    }[];
    assignedCarrierId: string;
    trackingLink: string;
    schedule: boolean;
    parentId: string;
    etaTime: string;
    deliveryInstruction: string;
}, HookContext<any>>;
export declare const shipdayOrderExternalResolver: import("@feathersjs/schema").Resolver<{
    feedback: string;
    orderStatus: {
        accepted: boolean;
        imcomplete: boolean;
        orderState: string;
    };
    orderId: number;
    orderNumber: string;
    companyId: string;
    areaId: string;
    customer: {
        address: string;
        name: string;
        phoneNumber: string;
        emailAddress: string;
        latitude: number;
        longitude: number;
    };
    restaurant: {
        id: number;
        address: string;
        name: string;
        phoneNumber: string;
        latitude: number;
        longitude: number;
    };
    assignedCarrier: {
        id: number;
        name: string;
        email: string;
        companyId: number;
        areaId: number;
        phoneNumber: string;
        personalId: number;
        codeName: string;
        isOnShift: boolean;
        carrierPhoto: string;
        isActive: boolean;
    };
    distance: string;
    activityLog: {
        startTime: string;
        placementTime: string;
        expectedPickupTime: string;
        expectedDeliveryDate: string;
        expectedDeliveryTime: string;
        assignedTime: string;
        pickedUpTime: string;
        arrivedTime: string;
        deliveryTime: string;
    };
    costing: {
        deliveryFee: string;
        totalCost: string;
        tip: string;
        discountAmount: string;
        tax: string;
        cashTip: string;
    };
    orderItems: {
        name: string;
        details: string;
        unit: string;
        quantity: string;
        addOns: string[];
    }[];
    assignedCarrierId: string;
    trackingLink: string;
    schedule: boolean;
    parentId: string;
    etaTime: string;
    deliveryInstruction: string;
}, HookContext<any>>;
export declare const shipdayOrderDataSchema: import("@sinclair/typebox").TObject<{
    orderNumber: import("@sinclair/typebox").TString<string>;
    customerName: import("@sinclair/typebox").TString<string>;
    customerAddress: import("@sinclair/typebox").TString<string>;
    customerEmail: import("@sinclair/typebox").TString<string>;
    customerPhoneNumber: import("@sinclair/typebox").TString<string>;
    restaurantName: import("@sinclair/typebox").TString<string>;
    restaurantAddress: import("@sinclair/typebox").TString<string>;
    restaurantPhoneNumber: import("@sinclair/typebox").TString<string>;
    expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
    expectedPickupTime: import("@sinclair/typebox").TString<"time">;
    expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
    pickupLatitude: import("@sinclair/typebox").TNumber;
    pickupLongitude: import("@sinclair/typebox").TNumber;
    deliveryLatitude: import("@sinclair/typebox").TNumber;
    deliveryLongitude: import("@sinclair/typebox").TNumber;
    orderItem: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TString<string>;
        unit: import("@sinclair/typebox").TString<"int32">;
        addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        details: import("@sinclair/typebox").TString<string>;
    }>>;
    tips: import("@sinclair/typebox").TNumber;
    tax: import("@sinclair/typebox").TNumber;
    discountAmount: import("@sinclair/typebox").TNumber;
    deliveryFee: import("@sinclair/typebox").TNumber;
    totalOrderCost: import("@sinclair/typebox").TNumber;
    deliveryInstruction: import("@sinclair/typebox").TString<string>;
    orderSource: import("@sinclair/typebox").TString<string>;
    additionalId: import("@sinclair/typebox").TString<string>;
    clientRestaurantId: import("@sinclair/typebox").TNumber;
}>;
export type ShipdayOrderData = Static<typeof shipdayOrderDataSchema>;
export declare const shipdayOrderDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const shipdayOrderDataResolver: import("@feathersjs/schema").Resolver<{
    deliveryFee: number;
    orderNumber: string;
    expectedPickupTime: string;
    expectedDeliveryDate: string;
    expectedDeliveryTime: string;
    discountAmount: number;
    tax: number;
    deliveryInstruction: string;
    customerName: string;
    customerAddress: string;
    customerEmail: string;
    customerPhoneNumber: string;
    restaurantName: string;
    restaurantAddress: string;
    restaurantPhoneNumber: string;
    pickupLatitude: number;
    pickupLongitude: number;
    deliveryLatitude: number;
    deliveryLongitude: number;
    orderItem: {
        name: string;
        details: string;
        unit: string;
        quantity: string;
        addOns: string[];
    }[];
    tips: number;
    totalOrderCost: number;
    orderSource: string;
    additionalId: string;
    clientRestaurantId: number;
}, HookContext<any>>;
export declare const shipdayOrderPatchSchema: import("@sinclair/typebox").TObject<{
    orderNumber: import("@sinclair/typebox").TString<string>;
    customerName: import("@sinclair/typebox").TString<string>;
    customerAddress: import("@sinclair/typebox").TString<string>;
    customerEmail: import("@sinclair/typebox").TString<string>;
    customerPhoneNumber: import("@sinclair/typebox").TString<string>;
    restaurantName: import("@sinclair/typebox").TString<string>;
    restaurantAddress: import("@sinclair/typebox").TString<string>;
    restaurantPhoneNumber: import("@sinclair/typebox").TString<string>;
    expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
    expectedPickupTime: import("@sinclair/typebox").TString<"time">;
    expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
    pickupLatitude: import("@sinclair/typebox").TNumber;
    pickupLongitude: import("@sinclair/typebox").TNumber;
    deliveryLatitude: import("@sinclair/typebox").TNumber;
    deliveryLongitude: import("@sinclair/typebox").TNumber;
    orderItem: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TString<string>;
        unit: import("@sinclair/typebox").TString<"int32">;
        addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        details: import("@sinclair/typebox").TString<string>;
    }>>;
    tips: import("@sinclair/typebox").TNumber;
    tax: import("@sinclair/typebox").TNumber;
    discountAmount: import("@sinclair/typebox").TNumber;
    deliveryFee: import("@sinclair/typebox").TNumber;
    totalOrderCost: import("@sinclair/typebox").TNumber;
    deliveryInstruction: import("@sinclair/typebox").TString<string>;
    orderSource: import("@sinclair/typebox").TString<string>;
    additionalId: import("@sinclair/typebox").TString<string>;
    clientRestaurantId: import("@sinclair/typebox").TNumber;
    orderId: import("@sinclair/typebox").TNumber;
}>;
export type ShipdayOrderPatch = Static<typeof shipdayOrderPatchSchema>;
export declare const shipdayOrderPatchValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const shipdayOrderPatchResolver: import("@feathersjs/schema").Resolver<{
    deliveryFee: number;
    orderId: number;
    orderNumber: string;
    expectedPickupTime: string;
    expectedDeliveryDate: string;
    expectedDeliveryTime: string;
    discountAmount: number;
    tax: number;
    deliveryInstruction: string;
    customerName: string;
    customerAddress: string;
    customerEmail: string;
    customerPhoneNumber: string;
    restaurantName: string;
    restaurantAddress: string;
    restaurantPhoneNumber: string;
    pickupLatitude: number;
    pickupLongitude: number;
    deliveryLatitude: number;
    deliveryLongitude: number;
    orderItem: {
        name: string;
        details: string;
        unit: string;
        quantity: string;
        addOns: string[];
    }[];
    tips: number;
    totalOrderCost: number;
    orderSource: string;
    additionalId: string;
    clientRestaurantId: number;
}, HookContext<any>>;
export declare const shipdayOrderQueryProperties: import("@sinclair/typebox").TOmit<import("@sinclair/typebox").TObject<{
    orderId: import("@sinclair/typebox").TNumber;
    orderNumber: import("@sinclair/typebox").TString<string>;
    companyId: import("@sinclair/typebox").TString<string>;
    areaId: import("@sinclair/typebox").TString<string>;
    customer: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        emailAddress: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>;
    restaurant: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>;
    assignedCarrier: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TInteger;
        personalId: import("@sinclair/typebox").TInteger;
        name: import("@sinclair/typebox").TString<string>;
        codeName: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        companyId: import("@sinclair/typebox").TInteger;
        areaId: import("@sinclair/typebox").TInteger;
        isOnShift: import("@sinclair/typebox").TBoolean;
        email: import("@sinclair/typebox").TString<string>;
        carrierPhoto: import("@sinclair/typebox").TString<string>;
        isActive: import("@sinclair/typebox").TBoolean;
    }>;
    distance: import("@sinclair/typebox").TString<"double">;
    activityLog: import("@sinclair/typebox").TObject<{
        placementTime: import("@sinclair/typebox").TString<"date-time">;
        expectedPickupTime: import("@sinclair/typebox").TString<"time">;
        expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
        expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
        assignedTime: import("@sinclair/typebox").TString<"date-time">;
        startTime: import("@sinclair/typebox").TString<"date-time">;
        pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
        arrivedTime: import("@sinclair/typebox").TString<"date-time">;
        deliveryTime: import("@sinclair/typebox").TString<"date-time">;
    }>;
    costing: import("@sinclair/typebox").TObject<{
        totalCost: import("@sinclair/typebox").TString<"double">;
        deliveryFee: import("@sinclair/typebox").TString<"double">;
        tip: import("@sinclair/typebox").TString<"double">;
        discountAmount: import("@sinclair/typebox").TString<"double">;
        tax: import("@sinclair/typebox").TString<"double">;
        cashTip: import("@sinclair/typebox").TString<"double">;
    }>;
    orderItems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TString<string>;
        unit: import("@sinclair/typebox").TString<"int32">;
        addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        details: import("@sinclair/typebox").TString<string>;
    }>>;
    assignedCarrierId: import("@sinclair/typebox").TString<"int32">;
    orderStatus: import("@sinclair/typebox").TObject<{
        imcomplete: import("@sinclair/typebox").TBoolean;
        accepted: import("@sinclair/typebox").TBoolean;
        orderState: import("@sinclair/typebox").TUnsafe<string>;
    }>;
    trackingLink: import("@sinclair/typebox").TString<"uri">;
    feedback: import("@sinclair/typebox").TString<string>;
    schedule: import("@sinclair/typebox").TBoolean;
    parentId: import("@sinclair/typebox").TString<"int32">;
    etaTime: import("@sinclair/typebox").TString<"time">;
    deliveryInstruction: import("@sinclair/typebox").TString<string>;
}>, []>;
export declare const shipdayOrderQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        feedback: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        orderStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        companyId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        areaId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        customer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        restaurant: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        assignedCarrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        distance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        activityLog: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        costing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        orderItems: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        assignedCarrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        trackingLink: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        schedule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        etaTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        deliveryInstruction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("feedback" | "orderStatus" | "orderId" | "orderNumber" | "companyId" | "areaId" | "customer" | "restaurant" | "assignedCarrier" | "distance" | "activityLog" | "costing" | "orderItems" | "assignedCarrierId" | "trackingLink" | "schedule" | "parentId" | "etaTime" | "deliveryInstruction")[]>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        feedback: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        orderStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            imcomplete: import("@sinclair/typebox").TBoolean;
            accepted: import("@sinclair/typebox").TBoolean;
            orderState: import("@sinclair/typebox").TUnsafe<string>;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>>;
        }>>]>>;
        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>>]>>;
        orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        companyId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        areaId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        customer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            emailAddress: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>>;
        }>>]>>;
        restaurant: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>>;
        }>>]>>;
        assignedCarrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
        }>>]>>;
        distance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"double">;
            $gte: import("@sinclair/typebox").TString<"double">;
            $lt: import("@sinclair/typebox").TString<"double">;
            $lte: import("@sinclair/typebox").TString<"double">;
            $ne: import("@sinclair/typebox").TString<"double">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"double">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"double">>;
        }>>]>>;
        activityLog: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            placementTime: import("@sinclair/typebox").TString<"date-time">;
            expectedPickupTime: import("@sinclair/typebox").TString<"time">;
            expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
            expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
            assignedTime: import("@sinclair/typebox").TString<"date-time">;
            startTime: import("@sinclair/typebox").TString<"date-time">;
            pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
            arrivedTime: import("@sinclair/typebox").TString<"date-time">;
            deliveryTime: import("@sinclair/typebox").TString<"date-time">;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>>;
        }>>]>>;
        costing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            totalCost: import("@sinclair/typebox").TString<"double">;
            deliveryFee: import("@sinclair/typebox").TString<"double">;
            tip: import("@sinclair/typebox").TString<"double">;
            discountAmount: import("@sinclair/typebox").TString<"double">;
            tax: import("@sinclair/typebox").TString<"double">;
            cashTip: import("@sinclair/typebox").TString<"double">;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>>;
        }>>]>>;
        orderItems: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TString<string>;
            unit: import("@sinclair/typebox").TString<"int32">;
            addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            details: import("@sinclair/typebox").TString<string>;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>>;
        }>>]>>;
        assignedCarrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"int32">;
            $gte: import("@sinclair/typebox").TString<"int32">;
            $lt: import("@sinclair/typebox").TString<"int32">;
            $lte: import("@sinclair/typebox").TString<"int32">;
            $ne: import("@sinclair/typebox").TString<"int32">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
        }>>]>>;
        trackingLink: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uri">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"uri">;
            $gte: import("@sinclair/typebox").TString<"uri">;
            $lt: import("@sinclair/typebox").TString<"uri">;
            $lte: import("@sinclair/typebox").TString<"uri">;
            $ne: import("@sinclair/typebox").TString<"uri">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uri">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uri">>;
        }>>]>>;
        schedule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TBoolean;
            $gte: import("@sinclair/typebox").TBoolean;
            $lt: import("@sinclair/typebox").TBoolean;
            $lte: import("@sinclair/typebox").TBoolean;
            $ne: import("@sinclair/typebox").TBoolean;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
        }>>]>>;
        parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"int32">;
            $gte: import("@sinclair/typebox").TString<"int32">;
            $lt: import("@sinclair/typebox").TString<"int32">;
            $lte: import("@sinclair/typebox").TString<"int32">;
            $ne: import("@sinclair/typebox").TString<"int32">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
        }>>]>>;
        etaTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"time">;
            $gte: import("@sinclair/typebox").TString<"time">;
            $lt: import("@sinclair/typebox").TString<"time">;
            $lte: import("@sinclair/typebox").TString<"time">;
            $ne: import("@sinclair/typebox").TString<"time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
        }>>]>>;
        deliveryInstruction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
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
        feedback: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        orderStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            imcomplete: import("@sinclair/typebox").TBoolean;
            accepted: import("@sinclair/typebox").TBoolean;
            orderState: import("@sinclair/typebox").TUnsafe<string>;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                imcomplete: import("@sinclair/typebox").TBoolean;
                accepted: import("@sinclair/typebox").TBoolean;
                orderState: import("@sinclair/typebox").TUnsafe<string>;
            }>>;
        }>>]>>;
        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>>]>>;
        orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        companyId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        areaId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>>]>>;
        customer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            emailAddress: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                emailAddress: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>>;
        }>>]>>;
        restaurant: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString<string>;
                address: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                latitude: import("@sinclair/typebox").TNumber;
                longitude: import("@sinclair/typebox").TNumber;
            }>>;
        }>>]>>;
        assignedCarrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TInteger;
                personalId: import("@sinclair/typebox").TInteger;
                name: import("@sinclair/typebox").TString<string>;
                codeName: import("@sinclair/typebox").TString<string>;
                phoneNumber: import("@sinclair/typebox").TString<string>;
                companyId: import("@sinclair/typebox").TInteger;
                areaId: import("@sinclair/typebox").TInteger;
                isOnShift: import("@sinclair/typebox").TBoolean;
                email: import("@sinclair/typebox").TString<string>;
                carrierPhoto: import("@sinclair/typebox").TString<string>;
                isActive: import("@sinclair/typebox").TBoolean;
            }>>;
        }>>]>>;
        distance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"double">;
            $gte: import("@sinclair/typebox").TString<"double">;
            $lt: import("@sinclair/typebox").TString<"double">;
            $lte: import("@sinclair/typebox").TString<"double">;
            $ne: import("@sinclair/typebox").TString<"double">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"double">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"double">>;
        }>>]>>;
        activityLog: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            placementTime: import("@sinclair/typebox").TString<"date-time">;
            expectedPickupTime: import("@sinclair/typebox").TString<"time">;
            expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
            expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
            assignedTime: import("@sinclair/typebox").TString<"date-time">;
            startTime: import("@sinclair/typebox").TString<"date-time">;
            pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
            arrivedTime: import("@sinclair/typebox").TString<"date-time">;
            deliveryTime: import("@sinclair/typebox").TString<"date-time">;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                placementTime: import("@sinclair/typebox").TString<"date-time">;
                expectedPickupTime: import("@sinclair/typebox").TString<"time">;
                expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
                expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
                assignedTime: import("@sinclair/typebox").TString<"date-time">;
                startTime: import("@sinclair/typebox").TString<"date-time">;
                pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
                arrivedTime: import("@sinclair/typebox").TString<"date-time">;
                deliveryTime: import("@sinclair/typebox").TString<"date-time">;
            }>>;
        }>>]>>;
        costing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            totalCost: import("@sinclair/typebox").TString<"double">;
            deliveryFee: import("@sinclair/typebox").TString<"double">;
            tip: import("@sinclair/typebox").TString<"double">;
            discountAmount: import("@sinclair/typebox").TString<"double">;
            tax: import("@sinclair/typebox").TString<"double">;
            cashTip: import("@sinclair/typebox").TString<"double">;
        }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $gte: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $lt: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $lte: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $ne: import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                totalCost: import("@sinclair/typebox").TString<"double">;
                deliveryFee: import("@sinclair/typebox").TString<"double">;
                tip: import("@sinclair/typebox").TString<"double">;
                discountAmount: import("@sinclair/typebox").TString<"double">;
                tax: import("@sinclair/typebox").TString<"double">;
                cashTip: import("@sinclair/typebox").TString<"double">;
            }>>;
        }>>]>>;
        orderItems: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TString<string>;
            unit: import("@sinclair/typebox").TString<"int32">;
            addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            details: import("@sinclair/typebox").TString<string>;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString<string>;
                quantity: import("@sinclair/typebox").TString<string>;
                unit: import("@sinclair/typebox").TString<"int32">;
                addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                details: import("@sinclair/typebox").TString<string>;
            }>>>;
        }>>]>>;
        assignedCarrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"int32">;
            $gte: import("@sinclair/typebox").TString<"int32">;
            $lt: import("@sinclair/typebox").TString<"int32">;
            $lte: import("@sinclair/typebox").TString<"int32">;
            $ne: import("@sinclair/typebox").TString<"int32">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
        }>>]>>;
        trackingLink: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uri">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"uri">;
            $gte: import("@sinclair/typebox").TString<"uri">;
            $lt: import("@sinclair/typebox").TString<"uri">;
            $lte: import("@sinclair/typebox").TString<"uri">;
            $ne: import("@sinclair/typebox").TString<"uri">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uri">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uri">>;
        }>>]>>;
        schedule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TBoolean;
            $gte: import("@sinclair/typebox").TBoolean;
            $lt: import("@sinclair/typebox").TBoolean;
            $lte: import("@sinclair/typebox").TBoolean;
            $ne: import("@sinclair/typebox").TBoolean;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
        }>>]>>;
        parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"int32">;
            $gte: import("@sinclair/typebox").TString<"int32">;
            $lt: import("@sinclair/typebox").TString<"int32">;
            $lte: import("@sinclair/typebox").TString<"int32">;
            $ne: import("@sinclair/typebox").TString<"int32">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
        }>>]>>;
        etaTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"time">;
            $gte: import("@sinclair/typebox").TString<"time">;
            $lt: import("@sinclair/typebox").TString<"time">;
            $lte: import("@sinclair/typebox").TString<"time">;
            $ne: import("@sinclair/typebox").TString<"time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
        }>>]>>;
        deliveryInstruction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
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
    feedback: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    orderStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        imcomplete: import("@sinclair/typebox").TBoolean;
        accepted: import("@sinclair/typebox").TBoolean;
        orderState: import("@sinclair/typebox").TUnsafe<string>;
    }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TObject<{
            imcomplete: import("@sinclair/typebox").TBoolean;
            accepted: import("@sinclair/typebox").TBoolean;
            orderState: import("@sinclair/typebox").TUnsafe<string>;
        }>;
        $gte: import("@sinclair/typebox").TObject<{
            imcomplete: import("@sinclair/typebox").TBoolean;
            accepted: import("@sinclair/typebox").TBoolean;
            orderState: import("@sinclair/typebox").TUnsafe<string>;
        }>;
        $lt: import("@sinclair/typebox").TObject<{
            imcomplete: import("@sinclair/typebox").TBoolean;
            accepted: import("@sinclair/typebox").TBoolean;
            orderState: import("@sinclair/typebox").TUnsafe<string>;
        }>;
        $lte: import("@sinclair/typebox").TObject<{
            imcomplete: import("@sinclair/typebox").TBoolean;
            accepted: import("@sinclair/typebox").TBoolean;
            orderState: import("@sinclair/typebox").TUnsafe<string>;
        }>;
        $ne: import("@sinclair/typebox").TObject<{
            imcomplete: import("@sinclair/typebox").TBoolean;
            accepted: import("@sinclair/typebox").TBoolean;
            orderState: import("@sinclair/typebox").TUnsafe<string>;
        }>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            imcomplete: import("@sinclair/typebox").TBoolean;
            accepted: import("@sinclair/typebox").TBoolean;
            orderState: import("@sinclair/typebox").TUnsafe<string>;
        }>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            imcomplete: import("@sinclair/typebox").TBoolean;
            accepted: import("@sinclair/typebox").TBoolean;
            orderState: import("@sinclair/typebox").TUnsafe<string>;
        }>>;
    }>>]>>;
    orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>>]>>;
    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    companyId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    areaId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
    customer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        emailAddress: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            emailAddress: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $gte: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            emailAddress: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $lt: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            emailAddress: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $lte: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            emailAddress: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $ne: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            emailAddress: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            emailAddress: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            emailAddress: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>>;
    }>>]>>;
    restaurant: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString<string>;
        address: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        latitude: import("@sinclair/typebox").TNumber;
        longitude: import("@sinclair/typebox").TNumber;
    }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $gte: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $lt: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $lte: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $ne: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString<string>;
            address: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            latitude: import("@sinclair/typebox").TNumber;
            longitude: import("@sinclair/typebox").TNumber;
        }>>;
    }>>]>>;
    assignedCarrier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TInteger;
        personalId: import("@sinclair/typebox").TInteger;
        name: import("@sinclair/typebox").TString<string>;
        codeName: import("@sinclair/typebox").TString<string>;
        phoneNumber: import("@sinclair/typebox").TString<string>;
        companyId: import("@sinclair/typebox").TInteger;
        areaId: import("@sinclair/typebox").TInteger;
        isOnShift: import("@sinclair/typebox").TBoolean;
        email: import("@sinclair/typebox").TString<string>;
        carrierPhoto: import("@sinclair/typebox").TString<string>;
        isActive: import("@sinclair/typebox").TBoolean;
    }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>;
        $gte: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>;
        $lt: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>;
        $lte: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>;
        $ne: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TInteger;
            personalId: import("@sinclair/typebox").TInteger;
            name: import("@sinclair/typebox").TString<string>;
            codeName: import("@sinclair/typebox").TString<string>;
            phoneNumber: import("@sinclair/typebox").TString<string>;
            companyId: import("@sinclair/typebox").TInteger;
            areaId: import("@sinclair/typebox").TInteger;
            isOnShift: import("@sinclair/typebox").TBoolean;
            email: import("@sinclair/typebox").TString<string>;
            carrierPhoto: import("@sinclair/typebox").TString<string>;
            isActive: import("@sinclair/typebox").TBoolean;
        }>>;
    }>>]>>;
    distance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"double">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"double">;
        $gte: import("@sinclair/typebox").TString<"double">;
        $lt: import("@sinclair/typebox").TString<"double">;
        $lte: import("@sinclair/typebox").TString<"double">;
        $ne: import("@sinclair/typebox").TString<"double">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"double">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"double">>;
    }>>]>>;
    activityLog: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        placementTime: import("@sinclair/typebox").TString<"date-time">;
        expectedPickupTime: import("@sinclair/typebox").TString<"time">;
        expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
        expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
        assignedTime: import("@sinclair/typebox").TString<"date-time">;
        startTime: import("@sinclair/typebox").TString<"date-time">;
        pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
        arrivedTime: import("@sinclair/typebox").TString<"date-time">;
        deliveryTime: import("@sinclair/typebox").TString<"date-time">;
    }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TObject<{
            placementTime: import("@sinclair/typebox").TString<"date-time">;
            expectedPickupTime: import("@sinclair/typebox").TString<"time">;
            expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
            expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
            assignedTime: import("@sinclair/typebox").TString<"date-time">;
            startTime: import("@sinclair/typebox").TString<"date-time">;
            pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
            arrivedTime: import("@sinclair/typebox").TString<"date-time">;
            deliveryTime: import("@sinclair/typebox").TString<"date-time">;
        }>;
        $gte: import("@sinclair/typebox").TObject<{
            placementTime: import("@sinclair/typebox").TString<"date-time">;
            expectedPickupTime: import("@sinclair/typebox").TString<"time">;
            expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
            expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
            assignedTime: import("@sinclair/typebox").TString<"date-time">;
            startTime: import("@sinclair/typebox").TString<"date-time">;
            pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
            arrivedTime: import("@sinclair/typebox").TString<"date-time">;
            deliveryTime: import("@sinclair/typebox").TString<"date-time">;
        }>;
        $lt: import("@sinclair/typebox").TObject<{
            placementTime: import("@sinclair/typebox").TString<"date-time">;
            expectedPickupTime: import("@sinclair/typebox").TString<"time">;
            expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
            expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
            assignedTime: import("@sinclair/typebox").TString<"date-time">;
            startTime: import("@sinclair/typebox").TString<"date-time">;
            pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
            arrivedTime: import("@sinclair/typebox").TString<"date-time">;
            deliveryTime: import("@sinclair/typebox").TString<"date-time">;
        }>;
        $lte: import("@sinclair/typebox").TObject<{
            placementTime: import("@sinclair/typebox").TString<"date-time">;
            expectedPickupTime: import("@sinclair/typebox").TString<"time">;
            expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
            expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
            assignedTime: import("@sinclair/typebox").TString<"date-time">;
            startTime: import("@sinclair/typebox").TString<"date-time">;
            pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
            arrivedTime: import("@sinclair/typebox").TString<"date-time">;
            deliveryTime: import("@sinclair/typebox").TString<"date-time">;
        }>;
        $ne: import("@sinclair/typebox").TObject<{
            placementTime: import("@sinclair/typebox").TString<"date-time">;
            expectedPickupTime: import("@sinclair/typebox").TString<"time">;
            expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
            expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
            assignedTime: import("@sinclair/typebox").TString<"date-time">;
            startTime: import("@sinclair/typebox").TString<"date-time">;
            pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
            arrivedTime: import("@sinclair/typebox").TString<"date-time">;
            deliveryTime: import("@sinclair/typebox").TString<"date-time">;
        }>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            placementTime: import("@sinclair/typebox").TString<"date-time">;
            expectedPickupTime: import("@sinclair/typebox").TString<"time">;
            expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
            expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
            assignedTime: import("@sinclair/typebox").TString<"date-time">;
            startTime: import("@sinclair/typebox").TString<"date-time">;
            pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
            arrivedTime: import("@sinclair/typebox").TString<"date-time">;
            deliveryTime: import("@sinclair/typebox").TString<"date-time">;
        }>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            placementTime: import("@sinclair/typebox").TString<"date-time">;
            expectedPickupTime: import("@sinclair/typebox").TString<"time">;
            expectedDeliveryDate: import("@sinclair/typebox").TString<"date">;
            expectedDeliveryTime: import("@sinclair/typebox").TString<"time">;
            assignedTime: import("@sinclair/typebox").TString<"date-time">;
            startTime: import("@sinclair/typebox").TString<"date-time">;
            pickedUpTime: import("@sinclair/typebox").TString<"date-time">;
            arrivedTime: import("@sinclair/typebox").TString<"date-time">;
            deliveryTime: import("@sinclair/typebox").TString<"date-time">;
        }>>;
    }>>]>>;
    costing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        totalCost: import("@sinclair/typebox").TString<"double">;
        deliveryFee: import("@sinclair/typebox").TString<"double">;
        tip: import("@sinclair/typebox").TString<"double">;
        discountAmount: import("@sinclair/typebox").TString<"double">;
        tax: import("@sinclair/typebox").TString<"double">;
        cashTip: import("@sinclair/typebox").TString<"double">;
    }>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TObject<{
            totalCost: import("@sinclair/typebox").TString<"double">;
            deliveryFee: import("@sinclair/typebox").TString<"double">;
            tip: import("@sinclair/typebox").TString<"double">;
            discountAmount: import("@sinclair/typebox").TString<"double">;
            tax: import("@sinclair/typebox").TString<"double">;
            cashTip: import("@sinclair/typebox").TString<"double">;
        }>;
        $gte: import("@sinclair/typebox").TObject<{
            totalCost: import("@sinclair/typebox").TString<"double">;
            deliveryFee: import("@sinclair/typebox").TString<"double">;
            tip: import("@sinclair/typebox").TString<"double">;
            discountAmount: import("@sinclair/typebox").TString<"double">;
            tax: import("@sinclair/typebox").TString<"double">;
            cashTip: import("@sinclair/typebox").TString<"double">;
        }>;
        $lt: import("@sinclair/typebox").TObject<{
            totalCost: import("@sinclair/typebox").TString<"double">;
            deliveryFee: import("@sinclair/typebox").TString<"double">;
            tip: import("@sinclair/typebox").TString<"double">;
            discountAmount: import("@sinclair/typebox").TString<"double">;
            tax: import("@sinclair/typebox").TString<"double">;
            cashTip: import("@sinclair/typebox").TString<"double">;
        }>;
        $lte: import("@sinclair/typebox").TObject<{
            totalCost: import("@sinclair/typebox").TString<"double">;
            deliveryFee: import("@sinclair/typebox").TString<"double">;
            tip: import("@sinclair/typebox").TString<"double">;
            discountAmount: import("@sinclair/typebox").TString<"double">;
            tax: import("@sinclair/typebox").TString<"double">;
            cashTip: import("@sinclair/typebox").TString<"double">;
        }>;
        $ne: import("@sinclair/typebox").TObject<{
            totalCost: import("@sinclair/typebox").TString<"double">;
            deliveryFee: import("@sinclair/typebox").TString<"double">;
            tip: import("@sinclair/typebox").TString<"double">;
            discountAmount: import("@sinclair/typebox").TString<"double">;
            tax: import("@sinclair/typebox").TString<"double">;
            cashTip: import("@sinclair/typebox").TString<"double">;
        }>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            totalCost: import("@sinclair/typebox").TString<"double">;
            deliveryFee: import("@sinclair/typebox").TString<"double">;
            tip: import("@sinclair/typebox").TString<"double">;
            discountAmount: import("@sinclair/typebox").TString<"double">;
            tax: import("@sinclair/typebox").TString<"double">;
            cashTip: import("@sinclair/typebox").TString<"double">;
        }>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            totalCost: import("@sinclair/typebox").TString<"double">;
            deliveryFee: import("@sinclair/typebox").TString<"double">;
            tip: import("@sinclair/typebox").TString<"double">;
            discountAmount: import("@sinclair/typebox").TString<"double">;
            tax: import("@sinclair/typebox").TString<"double">;
            cashTip: import("@sinclair/typebox").TString<"double">;
        }>>;
    }>>]>>;
    orderItems: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        quantity: import("@sinclair/typebox").TString<string>;
        unit: import("@sinclair/typebox").TString<"int32">;
        addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        details: import("@sinclair/typebox").TString<string>;
    }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TString<string>;
            unit: import("@sinclair/typebox").TString<"int32">;
            addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            details: import("@sinclair/typebox").TString<string>;
        }>>;
        $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TString<string>;
            unit: import("@sinclair/typebox").TString<"int32">;
            addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            details: import("@sinclair/typebox").TString<string>;
        }>>;
        $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TString<string>;
            unit: import("@sinclair/typebox").TString<"int32">;
            addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            details: import("@sinclair/typebox").TString<string>;
        }>>;
        $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TString<string>;
            unit: import("@sinclair/typebox").TString<"int32">;
            addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            details: import("@sinclair/typebox").TString<string>;
        }>>;
        $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TString<string>;
            unit: import("@sinclair/typebox").TString<"int32">;
            addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            details: import("@sinclair/typebox").TString<string>;
        }>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TString<string>;
            unit: import("@sinclair/typebox").TString<"int32">;
            addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            details: import("@sinclair/typebox").TString<string>;
        }>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString<string>;
            quantity: import("@sinclair/typebox").TString<string>;
            unit: import("@sinclair/typebox").TString<"int32">;
            addOns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            details: import("@sinclair/typebox").TString<string>;
        }>>>;
    }>>]>>;
    assignedCarrierId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"int32">;
        $gte: import("@sinclair/typebox").TString<"int32">;
        $lt: import("@sinclair/typebox").TString<"int32">;
        $lte: import("@sinclair/typebox").TString<"int32">;
        $ne: import("@sinclair/typebox").TString<"int32">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
    }>>]>>;
    trackingLink: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uri">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"uri">;
        $gte: import("@sinclair/typebox").TString<"uri">;
        $lt: import("@sinclair/typebox").TString<"uri">;
        $lte: import("@sinclair/typebox").TString<"uri">;
        $ne: import("@sinclair/typebox").TString<"uri">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uri">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uri">>;
    }>>]>>;
    schedule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TBoolean;
        $gte: import("@sinclair/typebox").TBoolean;
        $lt: import("@sinclair/typebox").TBoolean;
        $lte: import("@sinclair/typebox").TBoolean;
        $ne: import("@sinclair/typebox").TBoolean;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
    }>>]>>;
    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"int32">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"int32">;
        $gte: import("@sinclair/typebox").TString<"int32">;
        $lt: import("@sinclair/typebox").TString<"int32">;
        $lte: import("@sinclair/typebox").TString<"int32">;
        $ne: import("@sinclair/typebox").TString<"int32">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"int32">>;
    }>>]>>;
    etaTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"time">;
        $gte: import("@sinclair/typebox").TString<"time">;
        $lt: import("@sinclair/typebox").TString<"time">;
        $lte: import("@sinclair/typebox").TString<"time">;
        $ne: import("@sinclair/typebox").TString<"time">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"time">>;
    }>>]>>;
    deliveryInstruction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>>]>>;
}>>]>;
export type ShipdayOrderQuery = Static<typeof shipdayOrderQuerySchema>;
export declare const shipdayOrderQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const shipdayOrderQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        feedback?: number | undefined;
        orderStatus?: number | undefined;
        orderId?: number | undefined;
        orderNumber?: number | undefined;
        companyId?: number | undefined;
        areaId?: number | undefined;
        customer?: number | undefined;
        restaurant?: number | undefined;
        assignedCarrier?: number | undefined;
        distance?: number | undefined;
        activityLog?: number | undefined;
        costing?: number | undefined;
        orderItems?: number | undefined;
        assignedCarrierId?: number | undefined;
        trackingLink?: number | undefined;
        schedule?: number | undefined;
        parentId?: number | undefined;
        etaTime?: number | undefined;
        deliveryInstruction?: number | undefined;
    };
    $select: ("feedback" | "orderStatus" | "orderId" | "orderNumber" | "companyId" | "areaId" | "customer" | "restaurant" | "assignedCarrier" | "distance" | "activityLog" | "costing" | "orderItems" | "assignedCarrierId" | "trackingLink" | "schedule" | "parentId" | "etaTime" | "deliveryInstruction")[];
    $or: {
        feedback?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        orderStatus?: {
            accepted: boolean;
            imcomplete: boolean;
            orderState: string;
        } | Partial<{
            $gt: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $gte: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $lt: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $lte: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $ne: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $in: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            }[];
            $nin: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            }[];
        }> | undefined;
        orderId?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
        orderNumber?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        companyId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        areaId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        customer?: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        } | Partial<{
            $gt: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $gte: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $lt: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $lte: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $ne: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $in: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            }[];
            $nin: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            }[];
        }> | undefined;
        restaurant?: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        } | Partial<{
            $gt: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $gte: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $lt: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $lte: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $ne: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $in: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            }[];
            $nin: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            }[];
        }> | undefined;
        assignedCarrier?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | Partial<{
            $gt: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $gte: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $lt: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $lte: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $ne: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $in: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            }[];
            $nin: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            }[];
        }> | undefined;
        distance?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        activityLog?: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        } | Partial<{
            $gt: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $gte: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $lt: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $lte: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $ne: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $in: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            }[];
            $nin: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            }[];
        }> | undefined;
        costing?: {
            deliveryFee: string;
            totalCost: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        } | Partial<{
            $gt: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $gte: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $lt: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $lte: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $ne: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $in: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            }[];
            $nin: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            }[];
        }> | undefined;
        orderItems?: {
            name: string;
            details: string;
            unit: string;
            quantity: string;
            addOns: string[];
        }[] | Partial<{
            $gt: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $gte: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $lt: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $lte: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $ne: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $in: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[][];
            $nin: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[][];
        }> | undefined;
        assignedCarrierId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        trackingLink?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        schedule?: boolean | Partial<{
            $gt: boolean;
            $gte: boolean;
            $lt: boolean;
            $lte: boolean;
            $ne: boolean;
            $in: boolean[];
            $nin: boolean[];
        }> | undefined;
        parentId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        etaTime?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        deliveryInstruction?: string | Partial<{
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
        feedback?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        orderStatus?: {
            accepted: boolean;
            imcomplete: boolean;
            orderState: string;
        } | Partial<{
            $gt: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $gte: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $lt: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $lte: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $ne: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            };
            $in: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            }[];
            $nin: {
                accepted: boolean;
                imcomplete: boolean;
                orderState: string;
            }[];
        }> | undefined;
        orderId?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        }> | undefined;
        orderNumber?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        companyId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        areaId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        customer?: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        } | Partial<{
            $gt: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $gte: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $lt: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $lte: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $ne: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            };
            $in: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            }[];
            $nin: {
                address: string;
                name: string;
                phoneNumber: string;
                emailAddress: string;
                latitude: number;
                longitude: number;
            }[];
        }> | undefined;
        restaurant?: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        } | Partial<{
            $gt: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $gte: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $lt: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $lte: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $ne: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            };
            $in: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            }[];
            $nin: {
                id: number;
                address: string;
                name: string;
                phoneNumber: string;
                latitude: number;
                longitude: number;
            }[];
        }> | undefined;
        assignedCarrier?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | Partial<{
            $gt: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $gte: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $lt: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $lte: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $ne: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            };
            $in: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            }[];
            $nin: {
                id: number;
                name: string;
                email: string;
                companyId: number;
                areaId: number;
                phoneNumber: string;
                personalId: number;
                codeName: string;
                isOnShift: boolean;
                carrierPhoto: string;
                isActive: boolean;
            }[];
        }> | undefined;
        distance?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        activityLog?: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        } | Partial<{
            $gt: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $gte: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $lt: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $lte: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $ne: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            };
            $in: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            }[];
            $nin: {
                startTime: string;
                placementTime: string;
                expectedPickupTime: string;
                expectedDeliveryDate: string;
                expectedDeliveryTime: string;
                assignedTime: string;
                pickedUpTime: string;
                arrivedTime: string;
                deliveryTime: string;
            }[];
        }> | undefined;
        costing?: {
            deliveryFee: string;
            totalCost: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        } | Partial<{
            $gt: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $gte: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $lt: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $lte: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $ne: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            };
            $in: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            }[];
            $nin: {
                deliveryFee: string;
                totalCost: string;
                tip: string;
                discountAmount: string;
                tax: string;
                cashTip: string;
            }[];
        }> | undefined;
        orderItems?: {
            name: string;
            details: string;
            unit: string;
            quantity: string;
            addOns: string[];
        }[] | Partial<{
            $gt: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $gte: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $lt: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $lte: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $ne: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[];
            $in: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[][];
            $nin: {
                name: string;
                details: string;
                unit: string;
                quantity: string;
                addOns: string[];
            }[][];
        }> | undefined;
        assignedCarrierId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        trackingLink?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        schedule?: boolean | Partial<{
            $gt: boolean;
            $gte: boolean;
            $lt: boolean;
            $lte: boolean;
            $ne: boolean;
            $in: boolean[];
            $nin: boolean[];
        }> | undefined;
        parentId?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        etaTime?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        }> | undefined;
        deliveryInstruction?: string | Partial<{
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
    feedback?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    orderStatus?: {
        accepted: boolean;
        imcomplete: boolean;
        orderState: string;
    } | Partial<{
        $gt: {
            accepted: boolean;
            imcomplete: boolean;
            orderState: string;
        };
        $gte: {
            accepted: boolean;
            imcomplete: boolean;
            orderState: string;
        };
        $lt: {
            accepted: boolean;
            imcomplete: boolean;
            orderState: string;
        };
        $lte: {
            accepted: boolean;
            imcomplete: boolean;
            orderState: string;
        };
        $ne: {
            accepted: boolean;
            imcomplete: boolean;
            orderState: string;
        };
        $in: {
            accepted: boolean;
            imcomplete: boolean;
            orderState: string;
        }[];
        $nin: {
            accepted: boolean;
            imcomplete: boolean;
            orderState: string;
        }[];
    }> | undefined;
    orderId?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    }> | undefined;
    orderNumber?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    companyId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    areaId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    customer?: {
        address: string;
        name: string;
        phoneNumber: string;
        emailAddress: string;
        latitude: number;
        longitude: number;
    } | Partial<{
        $gt: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        };
        $gte: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        };
        $lt: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        };
        $lte: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        };
        $ne: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        };
        $in: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        }[];
        $nin: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        }[];
    }> | undefined;
    restaurant?: {
        id: number;
        address: string;
        name: string;
        phoneNumber: string;
        latitude: number;
        longitude: number;
    } | Partial<{
        $gt: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        };
        $gte: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        };
        $lt: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        };
        $lte: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        };
        $ne: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        };
        $in: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        }[];
        $nin: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        }[];
    }> | undefined;
    assignedCarrier?: {
        id: number;
        name: string;
        email: string;
        companyId: number;
        areaId: number;
        phoneNumber: string;
        personalId: number;
        codeName: string;
        isOnShift: boolean;
        carrierPhoto: string;
        isActive: boolean;
    } | Partial<{
        $gt: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        };
        $gte: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        };
        $lt: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        };
        $lte: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        };
        $ne: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        };
        $in: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        }[];
        $nin: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        }[];
    }> | undefined;
    distance?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    activityLog?: {
        startTime: string;
        placementTime: string;
        expectedPickupTime: string;
        expectedDeliveryDate: string;
        expectedDeliveryTime: string;
        assignedTime: string;
        pickedUpTime: string;
        arrivedTime: string;
        deliveryTime: string;
    } | Partial<{
        $gt: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        };
        $gte: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        };
        $lt: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        };
        $lte: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        };
        $ne: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        };
        $in: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        }[];
        $nin: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        }[];
    }> | undefined;
    costing?: {
        deliveryFee: string;
        totalCost: string;
        tip: string;
        discountAmount: string;
        tax: string;
        cashTip: string;
    } | Partial<{
        $gt: {
            deliveryFee: string;
            totalCost: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        };
        $gte: {
            deliveryFee: string;
            totalCost: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        };
        $lt: {
            deliveryFee: string;
            totalCost: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        };
        $lte: {
            deliveryFee: string;
            totalCost: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        };
        $ne: {
            deliveryFee: string;
            totalCost: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        };
        $in: {
            deliveryFee: string;
            totalCost: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        }[];
        $nin: {
            deliveryFee: string;
            totalCost: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        }[];
    }> | undefined;
    orderItems?: {
        name: string;
        details: string;
        unit: string;
        quantity: string;
        addOns: string[];
    }[] | Partial<{
        $gt: {
            name: string;
            details: string;
            unit: string;
            quantity: string;
            addOns: string[];
        }[];
        $gte: {
            name: string;
            details: string;
            unit: string;
            quantity: string;
            addOns: string[];
        }[];
        $lt: {
            name: string;
            details: string;
            unit: string;
            quantity: string;
            addOns: string[];
        }[];
        $lte: {
            name: string;
            details: string;
            unit: string;
            quantity: string;
            addOns: string[];
        }[];
        $ne: {
            name: string;
            details: string;
            unit: string;
            quantity: string;
            addOns: string[];
        }[];
        $in: {
            name: string;
            details: string;
            unit: string;
            quantity: string;
            addOns: string[];
        }[][];
        $nin: {
            name: string;
            details: string;
            unit: string;
            quantity: string;
            addOns: string[];
        }[][];
    }> | undefined;
    assignedCarrierId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    trackingLink?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    schedule?: boolean | Partial<{
        $gt: boolean;
        $gte: boolean;
        $lt: boolean;
        $lte: boolean;
        $ne: boolean;
        $in: boolean[];
        $nin: boolean[];
    }> | undefined;
    parentId?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    etaTime?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
    deliveryInstruction?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    }> | undefined;
}, HookContext<any>>;
