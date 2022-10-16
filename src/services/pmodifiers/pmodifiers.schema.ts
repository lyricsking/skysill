import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const pmodifiersSchema = Type.Object(
  {
    id: Type.Number(),
    businessId: Type.String(),
    name: Type.String()
    minSelectable: Type.Number()
    maxSelectable: Type.Number()
    noFree: Type.Number()
    
  },
  { $id: 'Pmodifiers', additionalProperties: false }
)
export type Pmodifiers = Static<typeof pmodifiersSchema>
export const pmodifiersResolver = resolve<Pmodifiers, HookContext>({
  properties: {}
})

export const pmodifiersExternalResolver = resolve<Pmodifiers, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const pmodifiersDataSchema = Type.Pick(pmodifiersSchema, ['text'], {
  $id: 'PmodifiersData',
  additionalProperties: false
})
export type PmodifiersData = Static<typeof pmodifiersDataSchema>
export const pmodifiersDataValidator = getDataValidator(pmodifiersDataSchema, dataValidator)
export const pmodifiersDataResolver = resolve<Pmodifiers, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const pmodifiersQueryProperties = Type.Pick(pmodifiersSchema, ['id', 'text'], {
  additionalProperties: false
})
export const pmodifiersQuerySchema = querySyntax(pmodifiersQueryProperties)
export type PmodifiersQuery = Static<typeof pmodifiersQuerySchema>
export const pmodifiersQueryValidator = getValidator(pmodifiersQuerySchema, queryValidator)
export const pmodifiersQueryResolver = resolve<PmodifiersQuery, HookContext>({
  properties: {}
})
