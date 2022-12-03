import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const ordersSchema = Type.Object(
  {
    id: Type.Number(),
    shopId: Type.String(),
    shopperId: Type.String(),
    subtotal: Type.Number(),
    deliveryFee: Type.Number(),
    deliveryAddress: Type.String(),
    deliveryGeopoint: Type.String()
  },
  { $id: 'Orders', additionalProperties: false }
)
export type Orders = Static<typeof ordersSchema>
export const ordersResolver = resolve<Orders, HookContext>({
  properties: {}
})

export const ordersExternalResolver = resolve<Orders, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const ordersDataSchema = Type.Omit(ordersSchema, ['id'], {
  $id: 'OrdersData',
  additionalProperties: false
})
export type OrdersData = Static<typeof ordersDataSchema>
export const ordersDataValidator = getDataValidator(ordersDataSchema, dataValidator)
export const ordersDataResolver = resolve<Orders, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const ordersQueryProperties = Type.Omit(ordersSchema, [], { additionalProperties: false })
export const ordersQuerySchema = querySyntax(ordersQueryProperties)
export type OrdersQuery = Static<typeof ordersQuerySchema>
export const ordersQueryValidator = getValidator(ordersQuerySchema, queryValidator)
export const ordersQueryResolver = resolve<OrdersQuery, HookContext>({
  properties: {}
})
