import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const sampleSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Sample', additionalProperties: false }
)
export type Sample = Static<typeof sampleSchema>
export const sampleResolver = resolve<Sample, HookContext>({
  properties: {}
})

export const sampleExternalResolver = resolve<Sample, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const sampleDataSchema = Type.Pick(sampleSchema, ['text'], {
  $id: 'SampleData',
  additionalProperties: false
})
export type SampleData = Static<typeof sampleDataSchema>
export const sampleDataValidator = getDataValidator(sampleDataSchema, dataValidator)
export const sampleDataResolver = resolve<Sample, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const sampleQueryProperties = Type.Pick(sampleSchema, ['id', 'text'], { additionalProperties: false })
export const sampleQuerySchema = querySyntax(sampleQueryProperties)
export type SampleQuery = Static<typeof sampleQuerySchema>
export const sampleQueryValidator = getValidator(sampleQuerySchema, queryValidator)
export const sampleQueryResolver = resolve<SampleQuery, HookContext>({
  properties: {}
})
