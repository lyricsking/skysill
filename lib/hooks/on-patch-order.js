"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPatchOrder = void 0;
const order_schema_1 = require("../services/order/order.schema");
const onPatchOrder = async (context, next) => {
    try {
        console.log(`Running hook onOrderPatch on ${context.path}.${context.method}`);
        const data = context.data;
        if (data.orderStatus != undefined && data.orderStatus != null) {
            switch (data.orderStatus) {
                case order_schema_1.OrderStatus.pending:
                    context.params.query.orderStatus = order_schema_1.OrderStatus.cart;
                    break;
                case order_schema_1.OrderStatus.accepted:
                    // Vendor accepted to process the order
                    context.params.query.orderStatus = order_schema_1.OrderStatus.pending;
                    break;
                case order_schema_1.OrderStatus.confirmed:
                    // Vendor confirmed order ready for delivery
                    context.params.query.orderStatus = order_schema_1.OrderStatus.accepted;
                    break;
                default:
                    break;
            }
        }
        const shouldUpdateDeliveryFee = (data.deliveryGeopoint != undefined && data.deliveryGeopoint != null);
        if (shouldUpdateDeliveryFee) {
            // Run logic to get delivery fee here
            // Update deliveryFee
            context.data.deliveryFee = undefined;
        }
        // Run Service method
        next();
    }
    catch (error) {
    }
    finally {
    }
};
exports.onPatchOrder = onPatchOrder;
