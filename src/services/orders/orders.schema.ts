import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const ordersSchema = {
  $id: 'Orders',
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
export type Orders = FromSchema<typeof ordersSchema>
export const ordersResolver = resolve<Orders, HookContext>({
  properties: {}
})
export const ordersExternalResolver = resolve<Orders, HookContext>({
  properties: {}
})

// Schema for creating new data
export const ordersDataSchema = {
  $id: 'OrdersData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    }
  }
} as const
export type OrdersData = FromSchema<typeof ordersDataSchema>
export const ordersDataValidator = getDataValidator(ordersDataSchema, dataValidator)
export const ordersDataResolver = resolve<OrdersData, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const ordersQuerySchema = {
  $id: 'OrdersQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(ordersSchema.properties)
  }
} as const
export type OrdersQuery = FromSchema<typeof ordersQuerySchema>
export const ordersQueryValidator = getValidator(ordersQuerySchema, queryValidator)
export const ordersQueryResolver = resolve<OrdersQuery, HookContext>({
  properties: {}
})
