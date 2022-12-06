import type { HookContext } from '../declarations'

export const resolveToNumber = function (param: string = ''){ 
  return async (context: HookContext) => {
    console.log(`Running hook resolveToNumber on ${context.path}.${context.method}`)
    context.data[param] = +context.data[param];
  }
}