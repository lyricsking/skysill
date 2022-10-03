import { schema, querySyntax } from '@feathersjs/schema'
import type { Infer } from '@feathersjs/schema'
import { BusinessData } from '../business/business.schema'

// Schema for the basic data model (e.g. creating new entries)
export const shopsDataSchema = schema({
  $id: 'ShopsData',
  type: 'object',
  additionalProperties: false,
  required: ['location'],
  properties: {
    location: {
      type:'object',
    }
  }
} as const)

export type ShopsData = Infer<typeof shopsDataSchema>

// Schema for making partial updates
export const shopsPatchSchema = schema({
  $id: 'ShopsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...shopsDataSchema.properties
  }
} as const)

export type ShopsPatch = Infer<typeof shopsPatchSchema>

// Schema for the data that is being returned
export const shopsResultSchema = schema({
  $id: 'ShopsResult',
  type: 'object',
  additionalProperties: false,
  required: [...shopsDataSchema.required, 'id'],
  properties: {
    ...shopsDataSchema.properties,
    id: {
      type: 'number'
    },
    businessId:{$ref:'BusinessData'}
  }
} as const)

export type ShopsResult = Infer<typeof shopsResultSchema>&{
  business: BusinessData
}

// Schema for allowed query properties
export const shopsQuerySchema = schema({
  $id: 'ShopsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(shopsResultSchema.properties)
  }
} as const)

export type ShopsQuery = Infer<typeof shopsQuerySchema>
