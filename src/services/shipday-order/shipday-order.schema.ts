import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'
import { Order, orderSchema } from '../order/order.schema'

// Main data model schema
export const shipdayOrderSchema = Type.Object(
  {
    id: Type.Number(),
    order: Type.Ref(orderSchema)
  },
  { $id: 'ShipdayOrder', additionalProperties: false }
)
export type ShipdayOrder = Static<typeof shipdayOrderSchema>
export const shipdayOrderResolver = resolve<ShipdayOrder, HookContext>({
  properties: {
    order: async (_value, shipday, context: HookContext) => {
      return await context.app.service('order').get(shipday.id);
    }
  }
})

export const shipdayOrderExternalResolver = resolve<ShipdayOrder, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const shipdayOrderDataSchema = Type.Pick(shipdayOrderSchema, ['id'], {
  $id: 'ShipdayOrderData',
  additionalProperties: false
})
export type ShipdayOrderData = Static<typeof shipdayOrderDataSchema>
export const shipdayOrderDataValidator = getDataValidator(shipdayOrderDataSchema, dataValidator)
export const shipdayOrderDataResolver = resolve<ShipdayOrder, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const shipdayOrderQueryProperties = Type.Pick(shipdayOrderSchema, ['id'], {
  additionalProperties: false
})
export const shipdayOrderQuerySchema = querySyntax(shipdayOrderQueryProperties)
export type ShipdayOrderQuery = Static<typeof shipdayOrderQuerySchema>
export const shipdayOrderQueryValidator = getValidator(shipdayOrderQuerySchema, queryValidator)
export const shipdayOrderQueryResolver = resolve<ShipdayOrderQuery, HookContext>({
  properties: {}
})
