import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const walletsSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Wallets', additionalProperties: false }
)
export type Wallets = Static<typeof walletsSchema>
export const walletsResolver = resolve<Wallets, HookContext>({
  properties: {}
})

export const walletsExternalResolver = resolve<Wallets, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const walletsDataSchema = Type.Pick(walletsSchema, ['text'], {
  $id: 'WalletsData',
  additionalProperties: false
})
export type WalletsData = Static<typeof walletsDataSchema>
export const walletsDataValidator = getDataValidator(walletsDataSchema, dataValidator)
export const walletsDataResolver = resolve<Wallets, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const walletsQueryProperties = Type.Pick(walletsSchema, ['id', 'text'], {
  additionalProperties: false
})
export const walletsQuerySchema = querySyntax(walletsQueryProperties)
export type WalletsQuery = Static<typeof walletsQuerySchema>
export const walletsQueryValidator = getValidator(walletsQuerySchema, queryValidator)
export const walletsQueryResolver = resolve<WalletsQuery, HookContext>({
  properties: {}
})
