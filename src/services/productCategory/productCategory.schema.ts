// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const productCategorySchema = Type.Object(
  {
    id: Type.Number(),
    businessId: Type.String(),
    name: Type.String(),
    availableAt: Type.Optional(Type.String()),
    unavailableAt: Type.Optional(Type.String())  
  },
  { $id: 'ProductCategory', additionalProperties: false }
)
export type ProductCategory = Static<typeof productCategorySchema>
export const productCategoryResolver = resolve<ProductCategory, HookContext>({})

export const productCategoryExternalResolver = resolve<ProductCategory, HookContext>({})

// Schema for creating new entries
export const productCategoryDataSchema = Type.Omit(productCategorySchema, ['id'], {
  $id: 'ProductCategoryData'
})
export type ProductCategoryData = Static<typeof productCategoryDataSchema>
export const productCategoryDataValidator = getDataValidator(productCategoryDataSchema, dataValidator)
export const productCategoryDataResolver = resolve<ProductCategory, HookContext>({})

// Schema for updating existing entries
export const productCategoryPatchSchema = Type.Partial(productCategoryDataSchema, {
  $id: 'ProductCategoryPatch'
})
export type ProductCategoryPatch = Static<typeof productCategoryPatchSchema>
export const productCategoryPatchValidator = getDataValidator(productCategoryPatchSchema, dataValidator)
export const productCategoryPatchResolver = resolve<ProductCategory, HookContext>({})

// Schema for allowed query properties
export const productCategoryQueryProperties = Type.Omit(productCategorySchema, [])
export const productCategoryQuerySchema = Type.Intersect(
  [
    querySyntax(productCategoryQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ProductCategoryQuery = Static<typeof productCategoryQuerySchema>
export const productCategoryQueryValidator = getValidator(productCategoryQuerySchema, queryValidator)
export const productCategoryQueryResolver = resolve<ProductCategoryQuery, HookContext>({})
