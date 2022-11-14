import type { HookContext } from '../declarations'

export const createWallet = async (context: HookContext) => {
  console.log(`Running hook create-wallet on ${context.path}.${context.method}`)
  context.app.service('wallets').create({})
}
