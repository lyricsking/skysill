import type { HookContext } from '../declarations'

export const createWallet = async (context: HookContext) => {
  console.log(`Running hook create-wallet on ${context.path}.${context.method}`)

  const wallet = await context.app.service('wallet').create(
    {
      owner: context.path,
      ownerId: context.data.id,
      balance: 0,
    })

  context.result.wallet = wallet;
}
