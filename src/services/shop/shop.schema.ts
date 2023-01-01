// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { businessSchema } from '../business/business.schema'

// Main data model schema
export const shopSchema = Type.Object(
  {
    id: Type.Number(),
    businessId: Type.String(),
    shopName: Type.String(),
    description: Type.String(),
    coordinate: Type.String(),
    category: Type.String(),
    tags: Type.String(),
    business: Type.Optional(Type.Ref(businessSchema))
  },
  { $id: 'Shop', additionalProperties: false }
)
export type Shop = Static<typeof shopSchema>
export const shopResolver = resolve<Shop, HookContext>({
  properties: {
    business: async (_value, user, context) => {
      console.log(user)
      // Associate the shop's business.
      const wallet = await context.app.service('business').get(user.businessId);
      return wallet;
    }
  }
})

export const shopExternalResolver = resolve<Shop, HookContext>({})

// Schema for creating new entries
export const shopDataSchema = Type.Omit(shopSchema, ['id', 'business'], {
  $id: 'ShopData',
  additionalProperties: false
})
export type ShopData = Static<typeof shopDataSchema>
export const shopDataValidator = getDataValidator(shopDataSchema, dataValidator)
export const shopDataResolver = resolve<Shop, HookContext>({})

// Schema for updating existing entries
export const shopPatchSchema = Type.Partial(shopDataSchema, {
  $id: 'ShopPatch'
})
export type ShopPatch = Static<typeof shopPatchSchema>
export const shopPatchValidator = getDataValidator(shopPatchSchema, dataValidator)
export const shopPatchResolver = resolve<Shop, HookContext>({})

// Schema for allowed query properties
export const shopQueryProperties = Type.Omit(shopSchema, ['business'], { additionalProperties: false })
export const shopQuerySchema = querySyntax(shopQueryProperties)
export type ShopQuery = Static<typeof shopQuerySchema>
export const shopQueryValidator = getValidator(shopQuerySchema, queryValidator)
export const shopQueryResolver = resolve<ShopQuery, HookContext>({})
