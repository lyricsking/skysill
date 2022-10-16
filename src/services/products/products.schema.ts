import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const productsSchema = {
  $id: 'Products',
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
export type Products = FromSchema<typeof productsSchema>
export const productsResolver = resolve<Products, HookContext>({
  properties: {}
})
export const productsExternalResolver = resolve<Products, HookContext>({
  properties: {}
})

// Schema for creating new data
export const productsDataSchema = {
  $id: 'ProductsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    }
  }
} as const
export type ProductsData = FromSchema<typeof productsDataSchema>
export const productsDataValidator = getDataValidator(productsDataSchema, dataValidator)
export const productsDataResolver = resolve<ProductsData, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const productsQuerySchema = {
  $id: 'ProductsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(productsSchema.properties)
  }
} as const
export type ProductsQuery = FromSchema<typeof productsQuerySchema>
export const productsQueryValidator = getValidator(productsQuerySchema, queryValidator)
export const productsQueryResolver = resolve<ProductsQuery, HookContext>({
  properties: {}
})
