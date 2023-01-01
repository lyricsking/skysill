// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const createWalletId = async (context: HookContext) => {
  console.log(`Running hook createWalletId on ${context.path}.${context.method}`)

  const id = context.data.id;
  const owner = context.data.owner;
  const balance = context.data.balance;

  context.data = {
    ownerId: owner+':'+id,
    balance: balance
  };
}
