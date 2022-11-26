import type { HookContext } from '../declarations'

export const generateShopId = async (context: HookContext) => {
  console.log(`Running hook generateShopId on ${context.path}.${context.method}`)

  let shopName:string = context.data.shopName;
  shopName += '-' + (Math.floor(Math.random() * 1000000) + 1000000).toString().substring(1);
  context.data.shopName = shopName;
}
