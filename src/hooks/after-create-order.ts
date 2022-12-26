import { Order } from '../client';
import type { HookContext } from '../declarations'
import { OrderPatch } from '../services/order/order';

export const afterCreateOrder = async (context: HookContext) => {
  console.log(`Running hook afterCreateOrder on ${context.path}.${context.method}`)

  const order: Order = context.result;
  const data = {
    pickupAddress: order.pickupAddress,
    pickupGeopoint: order.pickupGeopoint,
  };

  context.app.service('order')._update(order.id, {})
}
