import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const driversSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Drivers', additionalProperties: false }
)
export type Drivers = Static<typeof driversSchema>
export const driversResolver = resolve<Drivers, HookContext>({
  properties: {}
})

export const driversExternalResolver = resolve<Drivers, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const driversDataSchema = Type.Pick(driversSchema, ['text'], {
  $id: 'DriversData',
  additionalProperties: false
})
export type DriversData = Static<typeof driversDataSchema>
export const driversDataValidator = getDataValidator(driversDataSchema, dataValidator)
export const driversDataResolver = resolve<Drivers, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const driversQueryProperties = Type.Pick(driversSchema, ['id', 'text'], {
  additionalProperties: false
})
export const driversQuerySchema = querySyntax(driversQueryProperties)
export type DriversQuery = Static<typeof driversQuerySchema>
export const driversQueryValidator = getValidator(driversQuerySchema, queryValidator)
export const driversQueryResolver = resolve<DriversQuery, HookContext>({
  properties: {}
})
