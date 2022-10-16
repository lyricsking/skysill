import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const productsSchema = Type.Object(
  {
    id: Type.Number(),
    shopId: Type.String(),
    name: Type.String(),
    description: Type.String(),
    details: Type.String(),
    price: Type.Decimal(),
    discount: Type.Number(),
    discountType: Type.Enum({
    flat:'flat',
    percentage: 'percentage'
    })
  },
  { $id: 'Products', additionalProperties: false }
)
export type Products = Static<typeof productsSchema>
export const productsResolver = resolve<Products, HookContext>({
  properties: {}
})

export const productsExternalResolver = resolve<Products, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const productsDataSchema = Type.Pick(productsSchema, ['text'], {
  $id: 'ProductsData',
  additionalProperties: false
})
export type ProductsData = Static<typeof productsDataSchema>
export const productsDataValidator = getDataValidator(productsDataSchema, dataValidator)
export const productsDataResolver = resolve<Products, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const productsQueryProperties = Type.Pick(productsSchema, ['id', 'text'], {
  additionalProperties: false
})
export const productsQuerySchema = querySyntax(productsQueryProperties)
export type ProductsQuery = Static<typeof productsQuerySchema>
export const productsQueryValidator = getValidator(productsQuerySchema, queryValidator)
export const productsQueryResolver = resolve<ProductsQuery, HookContext>({
  properties: {}
})
