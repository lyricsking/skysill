"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeCreateOrder = void 0;
const maybeCreateOrder = async (context) => {
    console.log(`Running hook maybeCreateOrder on ${context.path}.${context.method}`);
    let orderService = context.app.service('order');
    await orderService._find({
        query: {
            $limit: 1,
            shopId: context.data.shopId,
            shopperId: context.data.shopperId,
            isCart: true,
        }
    }).then(async (value) => {
        let order = value.data[0];
        if (order == undefined) {
            order = await orderService.create({
                shopId: context.data.shopId,
                shopperId: context.data.shopperId,
                isCart: true,
            });
        }
        delete context.data.shopId;
        delete context.data.shopperId;
        context.data.orderId = order.id;
    });
};
exports.maybeCreateOrder = maybeCreateOrder;
