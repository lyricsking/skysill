import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const pmodifiersSchema = {
  $id: 'Pmodifiers',
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
export type Pmodifiers = FromSchema<typeof pmodifiersSchema>
export const pmodifiersResolver = resolve<Pmodifiers, HookContext>({
  properties: {}
})
export const pmodifiersExternalResolver = resolve<Pmodifiers, HookContext>({
  properties: {}
})

// Schema for creating new data
export const pmodifiersDataSchema = {
  $id: 'PmodifiersData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    }
  }
} as const
export type PmodifiersData = FromSchema<typeof pmodifiersDataSchema>
export const pmodifiersDataValidator = getDataValidator(pmodifiersDataSchema, dataValidator)
export const pmodifiersDataResolver = resolve<PmodifiersData, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const pmodifiersQuerySchema = {
  $id: 'PmodifiersQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(pmodifiersSchema.properties)
  }
} as const
export type PmodifiersQuery = FromSchema<typeof pmodifiersQuerySchema>
export const pmodifiersQueryValidator = getValidator(pmodifiersQuerySchema, queryValidator)
export const pmodifiersQueryResolver = resolve<PmodifiersQuery, HookContext>({
  properties: {}
})
