import { resolve } from '@feathersjs/schema'
import type { HookContext } from '../../declarations'

import type { BusinessData, BusinessPatch, BusinessResult, BusinessQuery } from './business.schema'
import {
  businessDataSchema,
  businessPatchSchema,
  businessResultSchema,
  businessQuerySchema
} from './business.schema'

// Resolver for the basic data model (e.g. creating new entries)
export const businessDataResolver = resolve<BusinessData, HookContext>({
  schema: businessDataSchema,
  validate: 'before',
  properties: {}
})

// Resolver for making partial updates
export const businessPatchResolver = resolve<BusinessPatch, HookContext>({
  schema: businessPatchSchema,
  validate: 'before',
  properties: {}
})

// Resolver for the data that is being returned
export const businessResultResolver = resolve<BusinessResult, HookContext>({
  schema: businessResultSchema,
  validate: false,
  properties: {}
})

// Resolver for query properties
export const businessQueryResolver = resolve<BusinessQuery, HookContext>({
  schema: businessQuerySchema,
  validate: 'before',
  properties: {}
})

// Export all resolvers in a format that can be used with the resolveAll hook
export const businessResolvers = {
  result: businessResultResolver,
  data: {
    create: businessDataResolver,
    update: businessDataResolver,
    patch: businessPatchResolver
  },
  query: businessQueryResolver
}
