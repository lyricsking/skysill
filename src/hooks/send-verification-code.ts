import type { HookContext } from '../declarations'

export const sendVerificationCode = async (context: HookContext) => {
  console.log(`Running hook sendVerificationCode on ${context.path}.${context.method}`)
}
