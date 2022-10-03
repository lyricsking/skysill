import { resolve } from '@feathersjs/schema'
import type { HookContext } from '../../declarations'

import type { ShoppersData, ShoppersPatch, ShoppersResult, ShoppersQuery } from './shoppers.schema'
import {
  shoppersDataSchema,
  shoppersPatchSchema,
  shoppersResultSchema,
  shoppersQuerySchema
} from './shoppers.schema'

// Resolver for the basic data model (e.g. creating new entries)
export const shoppersDataResolver = resolve<ShoppersData, HookContext>({
  schema: shoppersDataSchema,
  validate: 'before',
  properties: {}
})

// Resolver for making partial updates
export const shoppersPatchResolver = resolve<ShoppersPatch, HookContext>({
  schema: shoppersPatchSchema,
  validate: 'before',
  properties: {}
})

// Resolver for the data that is being returned
export const shoppersResultResolver = resolve<ShoppersResult, HookContext>({
  schema: shoppersResultSchema,
  validate: false,
  properties: {}
})

// Resolver for query properties
export const shoppersQueryResolver = resolve<ShoppersQuery, HookContext>({
  schema: shoppersQuerySchema,
  validate: 'before',
  properties: {}
})

// Export all resolvers in a format that can be used with the resolveAll hook
export const shoppersResolvers = {
  result: shoppersResultResolver,
  data: {
    create: shoppersDataResolver,
    update: shoppersDataResolver,
    patch: shoppersPatchResolver
  },
  query: shoppersQueryResolver
}
