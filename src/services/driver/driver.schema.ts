import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const driverSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Driver', additionalProperties: false }
)
export type Driver = Static<typeof driverSchema>
export const driverResolver = resolve<Driver, HookContext>({
  properties: {}
})

export const driverExternalResolver = resolve<Driver, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const driverDataSchema = Type.Pick(driverSchema, ['text'], {
  $id: 'DriverData',
  additionalProperties: false
})
export type DriverData = Static<typeof driverDataSchema>
export const driverDataValidator = getDataValidator(driverDataSchema, dataValidator)
export const driverDataResolver = resolve<Driver, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const driverQueryProperties = Type.Pick(driverSchema, ['id', 'text'], {
  additionalProperties: false
})
export const driverQuerySchema = querySyntax(driverQueryProperties)
export type DriverQuery = Static<typeof driverQuerySchema>
export const driverQueryValidator = getValidator(driverQuerySchema, queryValidator)
export const driverQueryResolver = resolve<DriverQuery, HookContext>({
  properties: {}
})
