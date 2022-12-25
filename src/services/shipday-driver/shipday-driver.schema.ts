import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const shipdayDriverSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'ShipdayDriver', additionalProperties: false }
)
export type ShipdayDriver = Static<typeof shipdayDriverSchema>
export const shipdayDriverResolver = resolve<ShipdayDriver, HookContext>({
  properties: {}
})

export const shipdayDriverExternalResolver = resolve<ShipdayDriver, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const shipdayDriverDataSchema = Type.Pick(shipdayDriverSchema, ['text'], {
  $id: 'ShipdayDriverData',
  additionalProperties: false
})
export type ShipdayDriverData = Static<typeof shipdayDriverDataSchema>
export const shipdayDriverDataValidator = getDataValidator(shipdayDriverDataSchema, dataValidator)
export const shipdayDriverDataResolver = resolve<ShipdayDriver, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const shipdayDriverQueryProperties = Type.Pick(shipdayDriverSchema, ['id', 'text'], {
  additionalProperties: false
})
export const shipdayDriverQuerySchema = querySyntax(shipdayDriverQueryProperties)
export type ShipdayDriverQuery = Static<typeof shipdayDriverQuerySchema>
export const shipdayDriverQueryValidator = getValidator(shipdayDriverQuerySchema, queryValidator)
export const shipdayDriverQueryResolver = resolve<ShipdayDriverQuery, HookContext>({
  properties: {}
})
