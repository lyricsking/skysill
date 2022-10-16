import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const brolesSchema = {
  $id: 'Broles',
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
export type Broles = FromSchema<typeof brolesSchema>
export const brolesResolver = resolve<Broles, HookContext>({
  properties: {}
})
export const brolesExternalResolver = resolve<Broles, HookContext>({
  properties: {}
})

// Schema for creating new data
export const brolesDataSchema = {
  $id: 'BrolesData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    }
  }
} as const
export type BrolesData = FromSchema<typeof brolesDataSchema>
export const brolesDataValidator = getDataValidator(brolesDataSchema, dataValidator)
export const brolesDataResolver = resolve<BrolesData, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const brolesQuerySchema = {
  $id: 'BrolesQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(brolesSchema.properties)
  }
} as const
export type BrolesQuery = FromSchema<typeof brolesQuerySchema>
export const brolesQueryValidator = getValidator(brolesQuerySchema, queryValidator)
export const brolesQueryResolver = resolve<BrolesQuery, HookContext>({
  properties: {}
})
