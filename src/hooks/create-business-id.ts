// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import { numberOfLength } from '../utils/number-gen';
import percentEncode from '@stdlib/string-percent-encode';

export const createBusinessId = async (context: HookContext) => {
  console.log(`Running hook createBusinessId on ${context.path}.${context.method}`)
  

  const prefix: string = percentEncode(context.data.name);
    
  context.data.id = prefix + '-' + numberOfLength(5)
}
