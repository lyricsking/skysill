"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afterCreateOrder = void 0;
const afterCreateOrder = async (context) => {
    console.log(`Running hook afterCreateOrder on ${context.path}.${context.method}`);
    const order = context.result;
    const data = {
        pickupAddress: order.pickupAddress,
        pickupGeopoint: order.pickupGeopoint,
    };
    context.app.service('order')._update(order.id, {});
};
exports.afterCreateOrder = afterCreateOrder;
