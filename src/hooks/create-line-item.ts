import { Lineitem, Order, Product } from '../client';
import type { HookContext } from '../declarations'
import { DiscountType } from '../services/product/product.schema';

export const createLineItem = async (context: HookContext) => {
  console.log(`Running hook create line item on ${context.path}.${context.method}`)

  const data = context.data;
  const order: Order = data.order;
 
  const product: Product = await context.app.service('product').get(data.productId);

  let price = product.price;
  // Calculate options price
  price += calculateOptionPrice(context.data.optionsId);

  context.data.discount = calculateDiscount(product.discountType, product.discount, context.data.price);
  context.data.finalItemPrice = context.data.price - context.data.discount;
  context.data.finalPrice = context.data.finalItemPrice * context.data.quantity;
}

function calculateOptionPrice(optionsId: string[]): number {
  return 0;
}

function calculateDiscount(discountType: string, discount: number, price: number): number {
  switch (discountType) {
    case DiscountType.percent: return ((discount / 100) * price);
    default: return discount;
  }
}
