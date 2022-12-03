import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const walletSchema = Type.Object(
  {
    id: Type.Number(),
    owner: Type.String(),
    ownerId: Type.String(),
    balance: Type.Number()
  },
  { $id: 'Wallet', additionalProperties: false }
)
export type Wallet = Static<typeof walletSchema>
export const walletResolver = resolve<Wallet, HookContext>({
  properties: {}
})

export const walletExternalResolver = resolve<Wallet, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const walletDataSchema = Type.Omit(walletSchema, ['id'], {
  $id: 'WalletData',
  additionalProperties: false
})
export type WalletData = Static<typeof walletDataSchema>
export const walletDataValidator = getDataValidator(walletDataSchema, dataValidator)
export const walletDataResolver = resolve<Wallet, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const walletQueryProperties = Type.Omit(walletSchema, ['balance'], {
  additionalProperties: false
})
export const walletQuerySchema = querySyntax(walletQueryProperties)
export type WalletQuery = Static<typeof walletQuerySchema>
export const walletQueryValidator = getValidator(walletQuerySchema, queryValidator)
export const walletQueryResolver = resolve<WalletQuery, HookContext>({
  properties: {}
})
