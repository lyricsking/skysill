import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'
import { modifierSchema } from '../modifier/modifier.schema'
import { productSchema } from '../product/product.schema'

// Main data model schema
export const productModifierSchema = Type.Object(
  {
    productId: Type.String(),
    modifierId: Type.String(),
    //product: Type.Optional(Type.Ref(productSchema)),
    //modifier: Type.Optional(Type.Ref(modifierSchema))
  },
  { $id: 'ProductModifier', additionalProperties: false }
)
export type ProductModifier = Static<typeof productModifierSchema>
export const productModifierResolver = resolve<ProductModifier, HookContext>({
  properties: {}
})

export const productModifierExternalResolver = resolve<ProductModifier, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const productModifierDataSchema = Type.Pick(productModifierSchema, ['productId', 'modifierId'], {
  $id: 'ProductModifierData',
  additionalProperties: false
})
export type ProductModifierData = Static<typeof productModifierDataSchema>
export const productModifierDataValidator = getDataValidator(productModifierDataSchema, dataValidator)
export const productModifierDataResolver = resolve<ProductModifier, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const productModifierQueryProperties = Type.Pick(productModifierSchema, ['productId', 'modifierId'], {
  additionalProperties: false
})
export const productModifierQuerySchema = querySyntax(productModifierQueryProperties)
export type ProductModifierQuery = Static<typeof productModifierQuerySchema>
export const productModifierQueryValidator = getValidator(productModifierQuerySchema, queryValidator)
export const productModifierQueryResolver = resolve<ProductModifierQuery, HookContext>({
  properties: {}
})
