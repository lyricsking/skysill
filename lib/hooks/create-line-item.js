"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLineItem = void 0;
const product_schema_1 = require("../services/product/product.schema");
const createLineItem = async (context) => {
    console.log(`Running hook create line item on ${context.path}.${context.method}`);
    const data = context.data;
    const product = await context.app.service('product').get(data.productId);
    let price = product.price;
    // Calculate options price
    price += calculateOptionPrice(context, data.optionsId);
    context.data.price = price;
    context.data.discount = calculateDiscount(product.discountType, product.discount, context.data.price);
    context.data.finalItemPrice = context.data.price - context.data.discount;
    context.data.finalPrice = context.data.finalItemPrice * context.data.quantity;
};
exports.createLineItem = createLineItem;
function calculateDiscount(discountType, discount, price) {
    switch (discountType) {
        case product_schema_1.DiscountType.percent: return ((discount / 100) * price);
        default: return discount;
    }
}
function calculateOptionPrice(context, optionsId) {
    let optionsPrice = 0;
    optionsId.forEach(async (optionId) => {
        const option = await context.app.service('modifierOption').get(optionId, {
            query: {
                $select: ['price']
            },
        });
        optionsPrice += option.price;
    });
    return optionsPrice;
}
