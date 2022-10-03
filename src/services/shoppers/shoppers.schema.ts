import { schema, querySyntax } from '@feathersjs/schema'
import type { Infer } from '@feathersjs/schema'
import { UsersData } from '../users/users.schema'

// Schema for the basic data model (e.g. creating new entries)
export const shoppersDataSchema = schema({
  $id: 'ShoppersData',
  type: 'object',
  additionalProperties: false,
  required: ['userId'],
  properties: {
    userId: {type:'string'}
  }
} as const)

export type ShoppersData = Infer<typeof shoppersDataSchema>

// Schema for making partial updates
export const shoppersPatchSchema = schema({
  $id: 'ShoppersPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...shoppersDataSchema.properties
  }
} as const)

export type ShoppersPatch = Infer<typeof shoppersPatchSchema>

// Schema for the data that is being returned
export const shoppersResultSchema = schema({
  $id: 'ShoppersResult',
  type: 'object',
  additionalProperties: false,
  required: [...shoppersDataSchema.required, 'id'],
  properties: {
    ...shoppersDataSchema.properties,
    id: {
      type: 'number'
    },
    user: {$ref: "UsersData" }
  }
} as const)

export type ShoppersResult = Infer<typeof shoppersResultSchema> &{
  user: UsersData
}

// Schema for allowed query properties
export const shoppersQuerySchema = schema({
  $id: 'ShoppersQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(shoppersResultSchema.properties)
  }
} as const)

export type ShoppersQuery = Infer<typeof shoppersQuerySchema>
