import type { HookContext } from '../declarations'

export const patchWalletBalance = async (context: HookContext) => {
  console.log(`Running hook patchWalletBalance on ${context.path}.${context.method}`)

  const transaction = context.result;

  const sumWallet = (await context.service.Model.sum({balance: 'amount'}).from('transaction'))[0].balance;
  
  await context.app.service('wallet').patch(
    transaction.walletId,
    {
      balance: sumWallet
    });
}