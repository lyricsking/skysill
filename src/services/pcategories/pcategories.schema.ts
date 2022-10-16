import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const pcategoriesSchema = Type.Object(
  {
    id: Type.Number(),
    businessId: Type.String(),
    name: Type.String(),    
  },
  { $id: 'Pcategories', additionalProperties: false }
)
export type Pcategories = Static<typeof pcategoriesSchema>
export const pcategoriesResolver = resolve<Pcategories, HookContext>({
  properties: {}
})

export const pcategoriesExternalResolver = resolve<Pcategories, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const pcategoriesDataSchema = Type.Pick(pcategoriesSchema, ['text'], {
  $id: 'PcategoriesData',
  additionalProperties: false
})
export type PcategoriesData = Static<typeof pcategoriesDataSchema>
export const pcategoriesDataValidator = getDataValidator(pcategoriesDataSchema, dataValidator)
export const pcategoriesDataResolver = resolve<Pcategories, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const pcategoriesQueryProperties = Type.Pick(pcategoriesSchema, ['id', 'text'], {
  additionalProperties: false
})
export const pcategoriesQuerySchema = querySyntax(pcategoriesQueryProperties)
export type PcategoriesQuery = Static<typeof pcategoriesQuerySchema>
export const pcategoriesQueryValidator = getValidator(pcategoriesQuerySchema, queryValidator)
export const pcategoriesQueryResolver = resolve<PcategoriesQuery, HookContext>({
  properties: {}
})
