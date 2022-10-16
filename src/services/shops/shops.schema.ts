import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const shopsSchema = Type.Object(
  {
    id: Type.Number(),
    businessId: Type.String(),
    description: Type.String(),
    coordinate: Type.String()
  },
  { $id: 'Shops', additionalProperties: false }
)
export type Shops = Static<typeof shopsSchema>
export const shopsResolver = resolve<Shops, HookContext>({
  properties: {}
})

export const shopsExternalResolver = resolve<Shops, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const shopsDataSchema = Type.Pick(shopsSchema, ['text'], {
  $id: 'ShopsData',
  additionalProperties: false
})
export type ShopsData = Static<typeof shopsDataSchema>
export const shopsDataValidator = getDataValidator(shopsDataSchema, dataValidator)
export const shopsDataResolver = resolve<Shops, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const shopsQueryProperties = Type.Pick(shopsSchema, ['id', 'text'], { additionalProperties: false })
export const shopsQuerySchema = querySyntax(shopsQueryProperties)
export type ShopsQuery = Static<typeof shopsQuerySchema>
export const shopsQueryValidator = getValidator(shopsQuerySchema, queryValidator)
export const shopsQueryResolver = resolve<ShopsQuery, HookContext>({
  properties: {}
})
