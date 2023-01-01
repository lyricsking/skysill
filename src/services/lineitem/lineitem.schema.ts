// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const lineitemSchema = Type.Object(
  {
    id: Type.Number(),
    productId: Type.String(),
    orderId: Type.String(),
    optionsId: Type.Array(Type.String()),
    price: Type.Number(),
    discount: Type.Number(),
    finalItemPrice: Type.Number(),
    quantity: Type.Number(),
    finalPrice: Type.Number(),
  },
  { $id: 'Lineitem', additionalProperties: false }
)
export type Lineitem = Static<typeof lineitemSchema>
export const lineitemResolver = resolve<Lineitem, HookContext>({})

export const lineitemExternalResolver = resolve<Lineitem, HookContext>({})

// Schema for creating new entries
export const lineitemDataSchema = Type.Object(
  {
    ...lineitemSchema.properties, 
    shopId: Type.String(),
    shopperId: Type.String()
  },
  {  $id: 'LineitemData',  additionalProperties: false }
)
export type LineitemData = Static<typeof lineitemDataSchema>
export const lineitemDataValidator = getDataValidator(lineitemDataSchema, dataValidator)
export const lineitemDataResolver = resolve<Lineitem, HookContext>({})

// Schema for updating existing entries
export const lineitemPatchSchema = Type.Partial(lineitemSchema, {
  $id: 'LineitemPatch'
})
export type LineitemPatch = Static<typeof lineitemPatchSchema>
export const lineitemPatchValidator = getDataValidator(lineitemPatchSchema, dataValidator)
export const lineitemPatchResolver = resolve<Lineitem, HookContext>({})

// Schema for allowed query properties
export const lineitemQueryProperties = Type.Omit(lineitemSchema, ['optionsId'])
export const lineitemQuerySchema = Type.Intersect(
  [
    querySyntax(lineitemQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type LineitemQuery = Static<typeof lineitemQuerySchema>
export const lineitemQueryValidator = getValidator(lineitemQuerySchema, queryValidator)
export const lineitemQueryResolver = resolve<LineitemQuery, HookContext>({})
