// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const productModifierSchema = Type.Object(
  {
    productId: Type.String(),
    modifierId: Type.String(),
  },
  { $id: 'ProductModifier', additionalProperties: false }
)
export type ProductModifier = Static<typeof productModifierSchema>
export const productModifierResolver = resolve<ProductModifier, HookContext>({})

export const productModifierExternalResolver = resolve<ProductModifier, HookContext>({})

// Schema for creating new entries
export const productModifierDataSchema = Type.Omit(productModifierSchema, [], {
  $id: 'ProductModifierData'
})
export type ProductModifierData = Static<typeof productModifierDataSchema>
export const productModifierDataValidator = getDataValidator(productModifierDataSchema, dataValidator)
export const productModifierDataResolver = resolve<ProductModifier, HookContext>({})

// Schema for updating existing entries
export const productModifierPatchSchema = Type.Partial(productModifierSchema, {
  $id: 'ProductModifierPatch'
})
export type ProductModifierPatch = Static<typeof productModifierPatchSchema>
export const productModifierPatchValidator = getDataValidator(productModifierPatchSchema, dataValidator)
export const productModifierPatchResolver = resolve<ProductModifier, HookContext>({})

// Schema for allowed query properties
export const productModifierQueryProperties = Type.Omit(productModifierSchema, [])
export const productModifierQuerySchema = Type.Intersect(
  [
    querySyntax(productModifierQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ProductModifierQuery = Static<typeof productModifierQuerySchema>
export const productModifierQueryValidator = getValidator(productModifierQuerySchema, queryValidator)
export const productModifierQueryResolver = resolve<ProductModifierQuery, HookContext>({})
