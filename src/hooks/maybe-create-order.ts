import type { HookContext } from '../declarations'

export const maybeCreateOrder = async (context: HookContext) => {
  console.log(`Running hook maybeCreateOrder on ${context.path}.${context.method}`)

  const order = context.app.service('order');
  order._find({
    query: {
      $limit: 1,
      shopId: context.data.shopId,
      shopperId: context.data.shopperId,
      isCart: true
    }
  })
}
