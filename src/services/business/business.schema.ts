import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const businessSchema = {
  $id: 'Business',
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
export type Business = FromSchema<typeof businessSchema>
export const businessResolver = resolve<Business, HookContext>({
  properties: {}
})
export const businessExternalResolver = resolve<Business, HookContext>({
  properties: {}
})

// Schema for creating new data
export const businessDataSchema = {
  $id: 'BusinessData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    }
  }
} as const
export type BusinessData = FromSchema<typeof businessDataSchema>
export const businessDataValidator = getDataValidator(businessDataSchema, dataValidator)
export const businessDataResolver = resolve<BusinessData, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const businessQuerySchema = {
  $id: 'BusinessQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(businessSchema.properties)
  }
} as const
export type BusinessQuery = FromSchema<typeof businessQuerySchema>
export const businessQueryValidator = getValidator(businessQuerySchema, queryValidator)
export const businessQueryResolver = resolve<BusinessQuery, HookContext>({
  properties: {}
})
