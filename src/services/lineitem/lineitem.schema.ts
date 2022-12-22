import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'
import { orderSchema } from '../order/order.schema'

// Main data model schema
export const lineitemSchema = Type.Object(
  {
    id: Type.Number(),
    productId: Type.String(),
    orderId: Type.String(),
    optionsId: Type.Array(Type.String()),
    price: Type.Number(),
    discount: Type.Number(),
    finalItemPrice: Type.Number(),
    quantity: Type.Number(),
    finalPrice: Type.Number(),
  },
  { $id: 'Lineitem', additionalProperties: false }
)
export type Lineitem = Static<typeof lineitemSchema>
export const lineitemResolver = resolve<Lineitem, HookContext>({
  properties: {}
})

export const lineitemExternalResolver = resolve<Lineitem, HookContext>({
  properties: {}
})

const c = Type.Pick(lineitemSchema, ['productId', 'optionsId', 'quantity'])

// Schema for creating new entries
export const lineitemDataSchema = Type.Object(
  {
    ...c.properties, 
    shopId: Type.String(),
    shopperId: Type.String()
  },
  {  $id: 'LineitemData',  additionalProperties: false }
)
export type LineitemData = Static<typeof lineitemDataSchema>
export const lineitemDataValidator = getDataValidator(lineitemDataSchema, dataValidator)
export const lineitemDataResolver = resolve<Lineitem, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const lineitemQueryProperties = Type.Omit(lineitemSchema, [], {
  additionalProperties: false
})
export const lineitemQuerySchema = querySyntax(lineitemQueryProperties)
export type LineitemQuery = Static<typeof lineitemQuerySchema>
export const lineitemQueryValidator = getValidator(lineitemQuerySchema, queryValidator)
export const lineitemQueryResolver = resolve<LineitemQuery, HookContext>({
  properties: {}
})
