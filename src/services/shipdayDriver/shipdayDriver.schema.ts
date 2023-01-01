// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const shipdayDriverSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'ShipdayDriver', additionalProperties: false }
)
export type ShipdayDriver = Static<typeof shipdayDriverSchema>
export const shipdayDriverResolver = resolve<ShipdayDriver, HookContext>({})

export const shipdayDriverExternalResolver = resolve<ShipdayDriver, HookContext>({})

// Schema for creating new entries
export const shipdayDriverDataSchema = Type.Pick(shipdayDriverSchema, ['text'], {
  $id: 'ShipdayDriverData'
})
export type ShipdayDriverData = Static<typeof shipdayDriverDataSchema>
export const shipdayDriverDataValidator = getDataValidator(shipdayDriverDataSchema, dataValidator)
export const shipdayDriverDataResolver = resolve<ShipdayDriver, HookContext>({})

// Schema for updating existing entries
export const shipdayDriverPatchSchema = Type.Partial(shipdayDriverSchema, {
  $id: 'ShipdayDriverPatch'
})
export type ShipdayDriverPatch = Static<typeof shipdayDriverPatchSchema>
export const shipdayDriverPatchValidator = getDataValidator(shipdayDriverPatchSchema, dataValidator)
export const shipdayDriverPatchResolver = resolve<ShipdayDriver, HookContext>({})

// Schema for allowed query properties
export const shipdayDriverQueryProperties = Type.Pick(shipdayDriverSchema, ['id', 'text'])
export const shipdayDriverQuerySchema = Type.Intersect(
  [
    querySyntax(shipdayDriverQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ShipdayDriverQuery = Static<typeof shipdayDriverQuerySchema>
export const shipdayDriverQueryValidator = getValidator(shipdayDriverQuerySchema, queryValidator)
export const shipdayDriverQueryResolver = resolve<ShipdayDriverQuery, HookContext>({})
