import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const brolesSchema = Type.Object(
  {
    id: Type.Number(),
    businesId: Type.String(),
    shopId: Type.String(),
    role: Type.Enum(
      {
       manager: 'manager',
       assistance: 'assistance'
      }),
  },
  { $id: 'Broles', additionalProperties: false }
)
export type Broles = Static<typeof brolesSchema>
export const brolesResolver = resolve<Broles, HookContext>({
  properties: {}
})

export const brolesExternalResolver = resolve<Broles, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const brolesDataSchema = Type.Omit(brolesSchema, ['id'], {
  $id: 'BrolesData',
  additionalProperties: false
})
export type BrolesData = Static<typeof brolesDataSchema>
export const brolesDataValidator = getDataValidator(brolesDataSchema, dataValidator)
export const brolesDataResolver = resolve<Broles, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const brolesQueryProperties = Type.Omit(brolesSchema, [], { additionalProperties: false })
export const brolesQuerySchema = querySyntax(brolesQueryProperties)
export type BrolesQuery = Static<typeof brolesQuerySchema>
export const brolesQueryValidator = getValidator(brolesQuerySchema, queryValidator)
export const brolesQueryResolver = resolve<BrolesQuery, HookContext>({
  properties: {}
})
