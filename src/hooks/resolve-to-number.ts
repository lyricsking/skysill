import type { HookContext } from '../declarations'

export const resolveToNumber = function (param: string = ''){ 
  return async (context: HookContext) => {
    console.log(`Running hook resolveToNumber on ${context.path}.${context.method}`)
  
    const value = context.data[param];

    if(!isNaN(value) && !isNaN(parseFloat(value))){

        context.data[param] = +value;
    }
  }
}