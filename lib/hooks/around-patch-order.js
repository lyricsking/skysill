"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aroundPatchOrder = void 0;
const lib_1 = require("@feathersjs/errors/lib");
const order_1 = require("../services/order/order");
const aroundPatchOrder = async (context, next) => {
    try {
        console.log(`Running hook onOrderPatch on ${context.path}.${context.method}`);
        const data = context.data;
        if (data.orderStatus != undefined && data.orderStatus != null) {
            switch (data.orderStatus) {
                case order_1.OrderStatus.pending:
                    context.params.query.orderStatus = order_1.OrderStatus.cart;
                    //
                    _chargeWallet(context);
                    // Run Service method
                    next();
                    break;
                case order_1.OrderStatus.accepted:
                    // Vendor accepted to process the order
                    context.params.query.orderStatus = order_1.OrderStatus.pending;
                    // 
                    _initDelivery(context);
                    // Run Service method
                    next();
                    break;
                case order_1.OrderStatus.declined:
                    // Vendor declined order
                    context.params.query.orderStatus = order_1.OrderStatus.pending;
                    // Run Service method
                    next();
                    break;
                default:
                    break;
            }
        }
    }
    catch (error) {
    }
    finally {
    }
};
exports.aroundPatchOrder = aroundPatchOrder;
async function _chargeWallet(context) {
    const id = '' + context.id;
    const order = await context.app.service('order')._get(id);
    const amount = (order.subtotal ?? 0) + (order.deliveryFee ?? 0);
    // Obtain row lock here sqlite does not support
    const txn = await context.app.service('transaction').create({
        walletId: 'user:' + context.data.shopperId,
        amount: amount,
        pend: true,
        narrations: `Payment transaction for order id: ${id}`
    });
    const txnId = txn.id;
    if (txnId == null || txnId == undefined) {
        throw new lib_1.BadRequest('Cannot create order transaction');
    }
    context.data.transactionId = txn.id;
}
async function _initDelivery(context) {
    const data = {};
    context.app.service('shipday-order').create({});
}
