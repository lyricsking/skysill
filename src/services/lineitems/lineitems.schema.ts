import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const lineitemsSchema = Type.Object(
  {
    id: Type.Number(),
    productId: Type.String(),
    price: Type.Number(),
    discount: Type.Number(),
    finalItemPrice: Type.Number(),
    quantity: Type.Number(),
    finalPrice: Type.Number()
  },
  { $id: 'Lineitems', additionalProperties: false }
)
export type Lineitems = Static<typeof lineitemsSchema>
export const lineitemsResolver = resolve<Lineitems, HookContext>({
  properties: {}
})

export const lineitemsExternalResolver = resolve<Lineitems, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const lineitemsDataSchema = Type.Pick(lineitemsSchema, ['text'], {
  $id: 'LineitemsData',
  additionalProperties: false
})
export type LineitemsData = Static<typeof lineitemsDataSchema>
export const lineitemsDataValidator = getDataValidator(lineitemsDataSchema, dataValidator)
export const lineitemsDataResolver = resolve<Lineitems, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const lineitemsQueryProperties = Type.Pick(lineitemsSchema, ['id', 'text'], {
  additionalProperties: false
})
export const lineitemsQuerySchema = querySyntax(lineitemsQueryProperties)
export type LineitemsQuery = Static<typeof lineitemsQuerySchema>
export const lineitemsQueryValidator = getValidator(lineitemsQuerySchema, queryValidator)
export const lineitemsQueryResolver = resolve<LineitemsQuery, HookContext>({
  properties: {}
})
