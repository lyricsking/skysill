import { Order } from '../client';
import type { HookContext } from '../declarations'

export const maybeCreateOrder = async (context: HookContext) => {
  console.log(`Running hook maybeCreateOrder on ${context.path}.${context.method}`)

  let orderService = context.app.service('order');
  
  await orderService._find({
    query: {
      $limit: 1,
      shopId: context.data.shopId,
      shopperId: context.data.shopperId,
      isCart: true, 
    }
  }).then(async (value) => {
    let order: Order = value.data[0];

    if(order == undefined) {
      order = await orderService.create({
        shopId: context.data.shopId,
        shopperId: context.data.shopperId,
        isCart: true,
      })
    }

    context.data.order = order;
  })

  
}
