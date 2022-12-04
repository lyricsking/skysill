import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const modifierSchema = Type.Object(
  {
    id: Type.Number(),
    businessId: Type.String(),
    name: Type.String(),
    minSelectable: Type.Integer(),
    maxSelectable: Type.Integer(),
    noFree: Type.Integer(),  
  },
  { $id: 'Modifier', additionalProperties: false }
)
export type Modifier = Static<typeof modifierSchema>
export const modifierResolver = resolve<Modifier, HookContext>({
  properties: {}
})

export const modifierExternalResolver = resolve<Modifier, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const modifierDataSchema = Type.Omit(modifierSchema, ['id'], {
  $id: 'ModifierData',
  additionalProperties: false
})
export type ModifierData = Static<typeof modifierDataSchema>
export const modifierDataValidator = getDataValidator(modifierDataSchema, dataValidator)
export const modifierDataResolver = resolve<Modifier, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const modifierQueryProperties = Type.Object(modifierSchema.properties, {
  additionalProperties: false
})
export const modifierQuerySchema = querySyntax(modifierQueryProperties)
export type ModifierQuery = Static<typeof modifierQuerySchema>
export const modifierQueryValidator = getValidator(modifierQuerySchema, queryValidator)
export const modifierQueryResolver = resolve<ModifierQuery, HookContext>({
  properties: {}
})
