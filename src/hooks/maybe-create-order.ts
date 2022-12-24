import { Order } from '../client';
import type { HookContext } from '../declarations'
import { OrderStatus } from '../services/order/order.schema';

export const maybeCreateOrder = async (context: HookContext) => {
  console.log(`Running hook maybeCreateOrder on ${context.path}.${context.method}`)

  let orderService = context.app.service('order');
  
  await orderService._find({
    query: {
      $limit: 1,
      shopId: context.data.shopId,
      shopperId: context.data.shopperId,
      orderStatus: OrderStatus.cart, 
    }
  }).then(async (value) => {
    let order: Order = value.data[0];

    if(order == undefined) {
      order = await orderService.create({
        shopId: context.data.shopId,
        shopperId: context.data.shopperId,
      })
    }
    
    delete context.data.shopId;
    delete context.data.shopperId;
    context.data.orderId = order.id;
  })  
}
