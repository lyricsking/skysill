// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const createProductId = async (context: HookContext) => {
  console.log(`Running hook createProductId on ${context.path}.${context.method}`)

  context.data.id = context.data.businessId + '-' + context.data.name;
}
