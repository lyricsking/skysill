import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const lineitemsSchema = {
  $id: 'Lineitems',
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
export type Lineitems = FromSchema<typeof lineitemsSchema>
export const lineitemsResolver = resolve<Lineitems, HookContext>({
  properties: {}
})
export const lineitemsExternalResolver = resolve<Lineitems, HookContext>({
  properties: {}
})

// Schema for creating new data
export const lineitemsDataSchema = {
  $id: 'LineitemsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    }
  }
} as const
export type LineitemsData = FromSchema<typeof lineitemsDataSchema>
export const lineitemsDataValidator = getDataValidator(lineitemsDataSchema, dataValidator)
export const lineitemsDataResolver = resolve<LineitemsData, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const lineitemsQuerySchema = {
  $id: 'LineitemsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(lineitemsSchema.properties)
  }
} as const
export type LineitemsQuery = FromSchema<typeof lineitemsQuerySchema>
export const lineitemsQueryValidator = getValidator(lineitemsQuerySchema, queryValidator)
export const lineitemsQueryResolver = resolve<LineitemsQuery, HookContext>({
  properties: {}
})
