import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const transactionsSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Transactions', additionalProperties: false }
)
export type Transactions = Static<typeof transactionsSchema>
export const transactionsResolver = resolve<Transactions, HookContext>({
  properties: {}
})

export const transactionsExternalResolver = resolve<Transactions, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const transactionsDataSchema = Type.Pick(transactionsSchema, ['text'], {
  $id: 'TransactionsData',
  additionalProperties: false
})
export type TransactionsData = Static<typeof transactionsDataSchema>
export const transactionsDataValidator = getDataValidator(transactionsDataSchema, dataValidator)
export const transactionsDataResolver = resolve<Transactions, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const transactionsQueryProperties = Type.Pick(transactionsSchema, ['id', 'text'], {
  additionalProperties: false
})
export const transactionsQuerySchema = querySyntax(transactionsQueryProperties)
export type TransactionsQuery = Static<typeof transactionsQuerySchema>
export const transactionsQueryValidator = getValidator(transactionsQuerySchema, queryValidator)
export const transactionsQueryResolver = resolve<TransactionsQuery, HookContext>({
  properties: {}
})
