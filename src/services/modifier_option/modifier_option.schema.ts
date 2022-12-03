import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const modifierOptionSchema = Type.Object(
  {
    id: Type.Number(),
    modifierId: Type.String(),
    name: Type.String(),
    price: Type.Number(),
  },
  { $id: 'ModifierOption', additionalProperties: false }
)
export type ModifierOption = Static<typeof modifierOptionSchema>
export const modifierOptionResolver = resolve<ModifierOption, HookContext>({
  properties: {}
})

export const modifierOptionExternalResolver = resolve<ModifierOption, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const modifierOptionDataSchema = Type.Omit(modifierOptionSchema, ['id'], {
  $id: 'ModifierOptionData',
  additionalProperties: false
})
export type ModifierOptionData = Static<typeof modifierOptionDataSchema>
export const modifierOptionDataValidator = getDataValidator(modifierOptionDataSchema, dataValidator)
export const modifierOptionDataResolver = resolve<ModifierOption, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const modifierOptionQueryProperties = modifierOptionSchema
export const modifierOptionQuerySchema = querySyntax(modifierOptionQueryProperties)
export type ModifierOptionQuery = Static<typeof modifierOptionQuerySchema>
export const modifierOptionQueryValidator = getValidator(modifierOptionQuerySchema, queryValidator)
export const modifierOptionQueryResolver = resolve<ModifierOptionQuery, HookContext>({
  properties: {}
})
