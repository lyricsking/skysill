import type { HookContext } from '../declarations'

export const createLineItem = async (context: HookContext) => {
  console.log(`Running hook create line item on ${context.path}.${context.method}`)
}
