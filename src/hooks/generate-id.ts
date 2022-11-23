import {nanoid} from 'nanoid'
import type { HookContext } from '../declarations'

export const generateId = function(size: number) {

  return async (context: HookContext) => {
    console.log(`Running hook generateId on ${context.path}.${context.method}`)

    context.data.id = nanoid(size)
  }
}
