import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const poptionsSchema = {
  $id: 'Poptions',
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
export type Poptions = FromSchema<typeof poptionsSchema>
export const poptionsResolver = resolve<Poptions, HookContext>({
  properties: {}
})
export const poptionsExternalResolver = resolve<Poptions, HookContext>({
  properties: {}
})

// Schema for creating new data
export const poptionsDataSchema = {
  $id: 'PoptionsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    }
  }
} as const
export type PoptionsData = FromSchema<typeof poptionsDataSchema>
export const poptionsDataValidator = getDataValidator(poptionsDataSchema, dataValidator)
export const poptionsDataResolver = resolve<PoptionsData, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const poptionsQuerySchema = {
  $id: 'PoptionsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(poptionsSchema.properties)
  }
} as const
export type PoptionsQuery = FromSchema<typeof poptionsQuerySchema>
export const poptionsQueryValidator = getValidator(poptionsQuerySchema, queryValidator)
export const poptionsQueryResolver = resolve<PoptionsQuery, HookContext>({
  properties: {}
})
