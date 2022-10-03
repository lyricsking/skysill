import { resolve } from '@feathersjs/schema'
import type { HookContext } from '../../declarations'

import type { ShopsData, ShopsPatch, ShopsResult, ShopsQuery } from './shops.schema'
import { shopsDataSchema, shopsPatchSchema, shopsResultSchema, shopsQuerySchema } from './shops.schema'

// Resolver for the basic data model (e.g. creating new entries)
export const shopsDataResolver = resolve<ShopsData, HookContext>({
  schema: shopsDataSchema,
  validate: 'before',
  properties: {}
})

// Resolver for making partial updates
export const shopsPatchResolver = resolve<ShopsPatch, HookContext>({
  schema: shopsPatchSchema,
  validate: 'before',
  properties: {}
})

// Resolver for the data that is being returned
export const shopsResultResolver = resolve<ShopsResult, HookContext>({
  schema: shopsResultSchema,
  validate: false,
  properties: {}
})

// Resolver for query properties
export const shopsQueryResolver = resolve<ShopsQuery, HookContext>({
  schema: shopsQuerySchema,
  validate: 'before',
  properties: {}
})

// Export all resolvers in a format that can be used with the resolveAll hook
export const shopsResolvers = {
  result: shopsResultResolver,
  data: {
    create: shopsDataResolver,
    update: shopsDataResolver,
    patch: shopsPatchResolver
  },
  query: shopsQueryResolver
}
