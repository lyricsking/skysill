// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const walletSchema = Type.Object(
  {
    ownerId: Type.String(),
    balance: Type.Number()
  },
  { $id: 'Wallet', additionalProperties: false }
)
export type Wallet = Static<typeof walletSchema>
export const walletResolver = resolve<Wallet, HookContext>({})

export const walletExternalResolver = resolve<Wallet, HookContext>({})

// Schema for creating new entries
export const walletDataSchema = Type.Intersect(
  [
    Type.Omit(walletSchema, ['ownerId']),
    Type.Object({
      id: Type.String(),
      owner: Type.String()
    }, { additionalProperties: false })
  ],
  { $id: 'WalletData', additionalProperties: false }
)
export type WalletData = Static<typeof walletDataSchema>
export const walletDataValidator = getDataValidator(walletDataSchema, dataValidator)
export const walletDataResolver = resolve<Wallet, HookContext>({})

// Schema for updating existing entries
export const walletPatchSchema = Type.Partial(walletSchema, {
  $id: 'WalletPatch'
})
export type WalletPatch = Static<typeof walletPatchSchema>
export const walletPatchValidator = getDataValidator(walletPatchSchema, dataValidator)
export const walletPatchResolver = resolve<Wallet, HookContext>({})

// Schema for allowed query properties
export const walletQueryProperties = Type.Omit(walletSchema, ['balance'])
export const walletQuerySchema = Type.Intersect(
  [
    querySyntax(walletQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type WalletQuery = Static<typeof walletQuerySchema>
export const walletQueryValidator = getValidator(walletQuerySchema, queryValidator)
export const walletQueryResolver = resolve<WalletQuery, HookContext>({})
