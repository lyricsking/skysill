import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const shopSchema = Type.Object(
  {
    id: Type.Number(),
    businessId: Type.String(),
    description: Type.String(),
    coordinate: Type.String()
  },
  { $id: 'Shop', additionalProperties: false }
)
export type Shop = Static<typeof shopSchema>
export const shopResolver = resolve<Shop, HookContext>({
  properties: {}
})

export const shopExternalResolver = resolve<Shop, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const shopDataSchema = Type.Omit(shopSchema, ['id'], {
  $id: 'ShopData',
  additionalProperties: false
})
export type ShopData = Static<typeof shopDataSchema>
export const shopDataValidator = getDataValidator(shopDataSchema, dataValidator)
export const shopDataResolver = resolve<Shop, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const shopQueryProperties = Type.Omit(shopSchema, [], { additionalProperties: false })
export const shopQuerySchema = querySyntax(shopQueryProperties)
export type ShopQuery = Static<typeof shopQuerySchema>
export const shopQueryValidator = getValidator(shopQuerySchema, queryValidator)
export const shopQueryResolver = resolve<ShopQuery, HookContext>({
  properties: {}
})
