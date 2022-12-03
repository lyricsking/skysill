import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const productCategorySchema = Type.Object(
  {
    id: Type.Number(),
    businessId: Type.String(),
    name: Type.String(),    
  },
  { $id: 'ProductCategory', additionalProperties: false }
)
export type ProductCategory = Static<typeof productCategorySchema>
export const productCategoryResolver = resolve<ProductCategory, HookContext>({
  properties: {}
})

export const productCategoryExternalResolver = resolve<ProductCategory, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const productCategoryDataSchema = Type.Omit(productCategorySchema, ['id'], {
  $id: 'ProductCategoryData',
  additionalProperties: false
})
export type ProductCategoryData = Static<typeof productCategoryDataSchema>
export const productCategoryDataValidator = getDataValidator(productCategoryDataSchema, dataValidator)
export const productCategoryDataResolver = resolve<ProductCategory, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const productCategoryQueryProperties = Type.Omit(productCategorySchema, [], {
  additionalProperties: false
})
export const productCategoryQuerySchema = querySyntax(productCategoryQueryProperties)
export type ProductCategoryQuery = Static<typeof productCategoryQuerySchema>
export const productCategoryQueryValidator = getValidator(productCategoryQuerySchema, queryValidator)
export const productCategoryQueryResolver = resolve<ProductCategoryQuery, HookContext>({
  properties: {}
})
