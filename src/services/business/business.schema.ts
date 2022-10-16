import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const businessSchema = Type.Object(
  {
    id: Type.Number(),
    ownerId: Type.String(),
    name: Type.String(),
    contactName: Type.String(),
    contactPhone: Type.String(),
    contactEmail: Type.String()
  },
  { $id: 'Business', additionalProperties: false }
)
export type Business = Static<typeof businessSchema>
export const businessResolver = resolve<Business, HookContext>({
  properties: {}
})

export const businessExternalResolver = resolve<Business, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const businessDataSchema = Type.Pick(businessSchema, ['text'], {
  $id: 'BusinessData',
  additionalProperties: false
})
export type BusinessData = Static<typeof businessDataSchema>
export const businessDataValidator = getDataValidator(businessDataSchema, dataValidator)
export const businessDataResolver = resolve<Business, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const businessQueryProperties = Type.Pick(businessSchema, ['id', 'text'], {
  additionalProperties: false
})
export const businessQuerySchema = querySyntax(businessQueryProperties)
export type BusinessQuery = Static<typeof businessQuerySchema>
export const businessQueryValidator = getValidator(businessQuerySchema, queryValidator)
export const businessQueryResolver = resolve<BusinessQuery, HookContext>({
  properties: {}
})
