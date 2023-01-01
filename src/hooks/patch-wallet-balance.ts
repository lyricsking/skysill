import { BadRequest } from '@feathersjs/errors/lib';
import type { HookContext } from '../declarations'

export const patchWalletBalance = async (context: HookContext) => {
  console.log(`Running hook patchWalletBalance on ${context.path}.${context.method}`)

  const transaction = context.result;

  const totalTxnBalance = (await context.service.Model.sum({balance: 'amount'}).from('transaction'))[0].balance;
  const pendingTxnBalance = (await context.service.Model.where('pend', true).sum({balance: 'amount'}).from('transaction'))[0].balance;
  const balance = totalTxnBalance - pendingTxnBalance;
  if(balance < 0){
    throw new BadRequest('Insufficient wallet balance')
  }

  await context.app.service('wallet').patch(transaction.walletId,
    {  balance },
    {  transaction: context.params.transaction });
}