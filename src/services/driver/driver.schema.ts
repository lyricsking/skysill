// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const driverSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Driver', additionalProperties: false }
)
export type Driver = Static<typeof driverSchema>
export const driverResolver = resolve<Driver, HookContext>({})

export const driverExternalResolver = resolve<Driver, HookContext>({})

// Schema for creating new entries
export const driverDataSchema = Type.Pick(driverSchema, ['text'], {
  $id: 'DriverData'
})
export type DriverData = Static<typeof driverDataSchema>
export const driverDataValidator = getDataValidator(driverDataSchema, dataValidator)
export const driverDataResolver = resolve<Driver, HookContext>({})

// Schema for updating existing entries
export const driverPatchSchema = Type.Partial(driverSchema, {
  $id: 'DriverPatch'
})
export type DriverPatch = Static<typeof driverPatchSchema>
export const driverPatchValidator = getDataValidator(driverPatchSchema, dataValidator)
export const driverPatchResolver = resolve<Driver, HookContext>({})

// Schema for allowed query properties
export const driverQueryProperties = Type.Pick(driverSchema, ['id', 'text'])
export const driverQuerySchema = Type.Intersect(
  [
    querySyntax(driverQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type DriverQuery = Static<typeof driverQuerySchema>
export const driverQueryValidator = getValidator(driverQuerySchema, queryValidator)
export const driverQueryResolver = resolve<DriverQuery, HookContext>({})
