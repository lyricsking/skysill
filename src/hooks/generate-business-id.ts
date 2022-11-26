import { nanoid } from 'nanoid'
import type { HookContext } from '../declarations'

export const generateBusinessId = async (context: HookContext) => {
  console.log(`Running hook generateBusinessId on ${context.path}.${context.method}`)

  const prefix: string = context.data.name;
  context.data.id = prefix + '-' + (Math.floor(Math.random() * 100000) + 100000).toString().substring(1);
}