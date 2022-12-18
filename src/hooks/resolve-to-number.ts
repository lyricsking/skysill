import { ifError } from 'assert';
import { isArray } from 'util';
import type { HookContext } from '../declarations'

export const resolveToNumber = function (param: string | string[]){ 
  return async (context: HookContext) => {
    if(context.data == undefined){
      return;
    }

    console.log(`Running hook resolveToNumber on ${context.path}.${context.method}`)

    if(typeof param == 'string'){
      _resolveToNumber(context, param)
    }else if(Array.isArray(param)){
      for (let index = 0; index < param.length; index++) {
        const element = param[index];
        
        _resolveToNumber(context, element)
      }
    }
  }
}

function _resolveToNumber(context: HookContext, param: string){
  const value = context.data[param];
  
    if(!isNaN(value) && !isNaN(parseFloat(value))){

        context.data[param] = +value;
    }
}