import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const productSchema = Type.Object(
  {
    id: Type.Number(),
    shopId: Type.String(),
    name: Type.String(),
    description: Type.String(),
    details: Type.String(),
    price: Type.Number(),
    discount: Type.Number(),
    discountType: Type.Enum({
    flat:'flat',
    percentage: 'percentage'
    })
  },
  { $id: 'Product', additionalProperties: false }
)
export type Product = Static<typeof productSchema>
export const productResolver = resolve<Product, HookContext>({
  properties: {}
})

export const productExternalResolver = resolve<Product, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const productDataSchema = Type.Omit(productSchema, ['id'], {
  $id: 'ProductData',
  additionalProperties: false
})
export type ProductData = Static<typeof productDataSchema>
export const productDataValidator = getDataValidator(productDataSchema, dataValidator)
export const productDataResolver = resolve<Product, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const productQueryProperties = Type.Omit(productSchema, [], {
  additionalProperties: false
})
export const productQuerySchema = querySyntax(productQueryProperties)
export type ProductQuery = Static<typeof productQuerySchema>
export const productQueryValidator = getValidator(productQuerySchema, queryValidator)
export const productQueryResolver = resolve<ProductQuery, HookContext>({
  properties: {}
})
