import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const productCategorySchema = {
  $id: 'ProductCategory',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'text'],
  properties: {
    id: {
      type: 'number'
    },
    text: {
      type: 'string'
    }
  }
} as const
export type ProductCategory = FromSchema<typeof productCategorySchema>
export const productCategoryResolver = resolve<ProductCategory, HookContext>({
  properties: {}
})
export const productCategoryExternalResolver = resolve<ProductCategory, HookContext>({
  properties: {}
})

// Schema for creating new data
export const productCategoryDataSchema = {
  $id: 'ProductCategoryData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    }
  }
} as const
export type ProductCategoryData = FromSchema<typeof productCategoryDataSchema>
export const productCategoryDataValidator = getDataValidator(productCategoryDataSchema, dataValidator)
export const productCategoryDataResolver = resolve<ProductCategoryData, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const productCategoryQuerySchema = {
  $id: 'ProductCategoryQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(productCategorySchema.properties)
  }
} as const
export type ProductCategoryQuery = FromSchema<typeof productCategoryQuerySchema>
export const productCategoryQueryValidator = getValidator(productCategoryQuerySchema, queryValidator)
export const productCategoryQueryResolver = resolve<ProductCategoryQuery, HookContext>({
  properties: {}
})
