// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

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
export const modifierOptionResolver = resolve<ModifierOption, HookContext>({})

export const modifierOptionExternalResolver = resolve<ModifierOption, HookContext>({})

// Schema for creating new entries
export const modifierOptionDataSchema = Type.Omit(modifierOptionSchema, ['id'], {
  $id: 'ModifierOptionData'
})
export type ModifierOptionData = Static<typeof modifierOptionDataSchema>
export const modifierOptionDataValidator = getDataValidator(modifierOptionDataSchema, dataValidator)
export const modifierOptionDataResolver = resolve<ModifierOption, HookContext>({})

// Schema for updating existing entries
export const modifierOptionPatchSchema = Type.Partial(modifierOptionSchema, {
  $id: 'ModifierOptionPatch'
})
export type ModifierOptionPatch = Static<typeof modifierOptionPatchSchema>
export const modifierOptionPatchValidator = getDataValidator(modifierOptionPatchSchema, dataValidator)
export const modifierOptionPatchResolver = resolve<ModifierOption, HookContext>({})

// Schema for allowed query properties
export const modifierOptionQueryProperties = Type.Omit(modifierOptionSchema, [])
export const modifierOptionQuerySchema = Type.Intersect(
  [
    querySyntax(modifierOptionQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ModifierOptionQuery = Static<typeof modifierOptionQuerySchema>
export const modifierOptionQueryValidator = getValidator(modifierOptionQuerySchema, queryValidator)
export const modifierOptionQueryResolver = resolve<ModifierOptionQuery, HookContext>({})
