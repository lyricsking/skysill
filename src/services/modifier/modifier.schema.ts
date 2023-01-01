// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

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
export const modifierResolver = resolve<Modifier, HookContext>({})

export const modifierExternalResolver = resolve<Modifier, HookContext>({})

// Schema for creating new entries
export const modifierDataSchema = Type.Omit(modifierSchema, ['id'], {
  $id: 'ModifierData'
})
export type ModifierData = Static<typeof modifierDataSchema>
export const modifierDataValidator = getDataValidator(modifierDataSchema, dataValidator)
export const modifierDataResolver = resolve<Modifier, HookContext>({})

// Schema for updating existing entries
export const modifierPatchSchema = Type.Partial(modifierSchema, {
  $id: 'ModifierPatch'
})
export type ModifierPatch = Static<typeof modifierPatchSchema>
export const modifierPatchValidator = getDataValidator(modifierPatchSchema, dataValidator)
export const modifierPatchResolver = resolve<Modifier, HookContext>({})

// Schema for allowed query properties
export const modifierQueryProperties = Type.Omit(modifierSchema, [])
export const modifierQuerySchema = Type.Intersect(
  [
    querySyntax(modifierQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ModifierQuery = Static<typeof modifierQuerySchema>
export const modifierQueryValidator = getValidator(modifierQuerySchema, queryValidator)
export const modifierQueryResolver = resolve<ModifierQuery, HookContext>({})
