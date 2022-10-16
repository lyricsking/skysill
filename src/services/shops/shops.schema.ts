import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const shopSchema = {
  $id: 'Shop',
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
export type Shop = FromSchema<typeof shopSchema>
export const shopResolver = resolve<Shop, HookContext>({
  properties: {}
})
export const shopExternalResolver = resolve<Shop, HookContext>({
  properties: {}
})

// Schema for creating new data
export const shopDataSchema = {
  $id: 'ShopData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    }
  }
} as const
export type ShopData = FromSchema<typeof shopDataSchema>
export const shopDataValidator = getDataValidator(shopDataSchema, dataValidator)
export const shopDataResolver = resolve<ShopData, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const shopQuerySchema = {
  $id: 'ShopQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(shopSchema.properties)
  }
} as const
export type ShopQuery = FromSchema<typeof shopQuerySchema>
export const shopQueryValidator = getValidator(shopQuerySchema, queryValidator)
export const shopQueryResolver = resolve<ShopQuery, HookContext>({
  properties: {}
})
