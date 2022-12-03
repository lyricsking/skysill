import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const poptionsSchema = Type.Object(
  {
    id: Type.Number(),
    modifierId: Type.String(),
    name: Type.String(),
    price: Type.Number(),
  },
  { $id: 'Poptions', additionalProperties: false }
)
export type Poptions = Static<typeof poptionsSchema>
export const poptionsResolver = resolve<Poptions, HookContext>({
  properties: {}
})

export const poptionsExternalResolver = resolve<Poptions, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const poptionsDataSchema = Type.Omit(poptionsSchema, ['id'], {
  $id: 'PoptionsData',
  additionalProperties: false
})
export type PoptionsData = Static<typeof poptionsDataSchema>
export const poptionsDataValidator = getDataValidator(poptionsDataSchema, dataValidator)
export const poptionsDataResolver = resolve<Poptions, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const poptionsQueryProperties = poptionsSchema
export const poptionsQuerySchema = querySyntax(poptionsQueryProperties)
export type PoptionsQuery = Static<typeof poptionsQuerySchema>
export const poptionsQueryValidator = getValidator(poptionsQuerySchema, queryValidator)
export const poptionsQueryResolver = resolve<PoptionsQuery, HookContext>({
  properties: {}
})
