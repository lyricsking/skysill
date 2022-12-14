import { Lineitem, Order, Product } from '../client';
import type { HookContext } from '../declarations'
import { DiscountType } from '../services/product/product.schema';

export const createLineItem = async (context: HookContext) => {
  console.log(`Running hook create line item on ${context.path}.${context.method}`)

  const data = context.data;
 
  const product: Product = await context.app.service('product').get(data.productId);

  let price = product.price;
  // Calculate options price
  price += calculateOptionPrice(context, data.optionsId);

  context.data.price = price;
  context.data.discount = calculateDiscount(product.discountType, product.discount, context.data.price);
  context.data.finalItemPrice = context.data.price - context.data.discount;
  context.data.finalPrice = context.data.finalItemPrice * context.data.quantity;

}

function calculateDiscount(discountType: string, discount: number, price: number): number {
  switch (discountType) {
    case DiscountType.flat: return ((discount / 100) * price);
    default: return discount;
  }
}

function calculateOptionPrice(context: HookContext, optionsId: string[]): number {
  let optionsPrice: number = 0;
  optionsId.forEach(async optionId => {
    const option = await context.app.service('modifierOption').get(optionId,{
      query: {
        $select: ['price']
      },
    });

    optionsPrice += option.price;

  });
  
  return optionsPrice;
}