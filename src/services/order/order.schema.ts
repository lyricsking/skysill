import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const orderSchema = Type.Object(
  {
    id: Type.Number(),
    shopId: Type.String(),
    shopperId: Type.String(),
    subtotal: Type.Optional(Type.Number()),
    deliveryFee: Type.Optional(Type.Number()),
    deliveryAddress: Type.Optional(Type.String()),
    deliveryGeopoint: Type.Optional(Type.String()),
    isCart: Type.Optional(Type.Boolean())
  },
  { $id: 'Order', additionalProperties: false }
)
export type Order = Static<typeof orderSchema>
export const orderResolver = resolve<Order, HookContext>({
  properties: {}
})

export const orderExternalResolver = resolve<Order, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const orderDataSchema = Type.Pick(orderSchema, ['shopId', 'shopperId', 'isCart'], {
  $id: 'OrderData',
  additionalProperties: false
})
export type OrderData = Static<typeof orderDataSchema>
export const orderDataValidator = getDataValidator(orderDataSchema, dataValidator)
export const orderDataResolver = resolve<Order, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const orderQueryProperties = Type.Omit(orderSchema, [], { additionalProperties: false })
export const orderQuerySchema = querySyntax(orderQueryProperties)
export type OrderQuery = Static<typeof orderQuerySchema>
export const orderQueryValidator = getValidator(orderQuerySchema, queryValidator)
export const orderQueryResolver = resolve<OrderQuery, HookContext>({
  properties: {}
})
