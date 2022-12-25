import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'
import { lineitem, Lineitem, lineitemSchema } from '../lineitem/lineitem'

export const OrderStatus = {
  cart: 'cart',
  pending : "pending",
  accepted : "accepted",
  confirmed : "confirmed",
  assigned : "assigned",
  awaitingPickup : "awaitingPickup",
  inTransit : "inTransit",
  delivered : "delivered",
  cancelled : "cancelled"
}
export type OrderStatus = typeof OrderStatus;

// Main data model schema
export const orderSchema = Type.Object(
  {
    id: Type.String(),
    shopId: Type.String(),
    shopperId: Type.String(),
    subtotal: Type.Optional(Type.Number()),
    deliveryFee: Type.Optional(Type.Number()),
    deliveryAddress: Type.Optional(Type.String()),
    deliveryGeopoint: Type.Optional(Type.String()),
    orderStatus: StringEnum(Object.values(OrderStatus)),
    lineItems: Type.Array(Type.Ref(lineitemSchema))
  },
  { $id: 'Order', additionalProperties: false }
)
export type Order = Static<typeof orderSchema>
export const orderResolver = resolve<Order, HookContext>({
  properties: {
    lineItems: async (_value, order, context) => {
      return await context.app.service('lineitem').find({
        query: {
          orderId: order.id
        },
        paginate: false
      })
    }
  }
})

export const orderExternalResolver = resolve<Order, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const orderDataSchema = Type.Pick(orderSchema, ['shopId', 'shopperId'], {
  $id: 'OrderData',
  additionalProperties: false
})
export type OrderData = Static<typeof orderDataSchema>
export const orderDataValidator = getDataValidator(orderDataSchema, dataValidator)
export const orderDataResolver = resolve<Order, HookContext>({
  properties:{
    lineItems: async () => undefined
  }
})

// Schema for patching order entries
export const orderPatchSchema = Type.Pick(orderSchema, ['deliveryAddress', 'deliveryGeopoint', 'orderStatus' ], 
  { 
    $id: 'OrderPatch', additionalProperties: false
  })
export type OrderPatch = Static < typeof orderPatchSchema >
export const orderPatchValidator = getDataValidator(orderPatchSchema, dataValidator)
export const orderPatchResolver = resolve < Order,
  HookContext > ({
    properties: {
      lineItems: async () => undefined
    }
  })

// Schema for allowed query properties
export const orderQueryProperties = Type.Omit(orderSchema, ['lineItems'], { additionalProperties: false })
export const orderQuerySchema = querySyntax(orderQueryProperties)
export type OrderQuery = Static<typeof orderQuerySchema>
export const orderQueryValidator = getValidator(orderQuerySchema, queryValidator)
export const orderQueryResolver = resolve<OrderQuery, HookContext>({
  properties: {  }
})
