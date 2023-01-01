// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import { numberOfLength } from '../utils/number-gen';

export const beforeCreateShodId = async (context: HookContext) => {
  console.log(`Running hook beforeCreateShodId on ${context.path}.${context.method}`)

  const shopName:string = context.data.shopName;
  const shopId = shopName + '-' + numberOfLength(6)
  context.data.id = shopId;
}