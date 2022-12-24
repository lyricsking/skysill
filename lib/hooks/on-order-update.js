"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onOrderUpdate = void 0;
const order_schema_1 = require("../services/order/order.schema");
const onOrderUpdate = async (context) => {
    console.log(`Running hook onOrderUpdate on ${context.path}.${context.method}`);
    const data = context.data;
    if (data.orderStatus != undefined && data.orderStatus != null) {
        switch (data.orderStatus) {
            case order_schema_1.OrderStatus.pending:
                break;
            case order_schema_1.OrderStatus.accepted:
                // Vendor accepted to process the order
                break;
            case order_schema_1.OrderStatus.confirmed:
                // Vendor confirmed order ready for delivery
                break;
            default:
                break;
        }
    }
};
exports.onOrderUpdate = onOrderUpdate;
