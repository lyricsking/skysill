import type { HookContext } from '../declarations'

export const createWallet = async (context: HookContext) => {
  console.log(`Running hook create-wallet on ${context.path}.${context.method}`)
  
  const wallet = await context.app.service('wallets').create(
    {
      walletableId: context.data.id,
      walletableType: context.service,
      balance: 0,
    })

  context.result.wallet = wallet;
}
