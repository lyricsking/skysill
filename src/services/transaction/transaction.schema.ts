import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const transactionSchema = Type.Object(
  {
    id: Type.Number(),
    walletId: Type.String(),
    amount: Type.Number(),
    pend: Type.Boolean(),
    narrations: Type.String()
  },
  { $id: 'Transaction', additionalProperties: false }
)
export type Transaction = Static<typeof transactionSchema>
export const transactionResolver = resolve<Transaction, HookContext>({
  properties: {}
})

export const transactionExternalResolver = resolve<Transaction, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const transactionDataSchema = Type.Omit(transactionSchema, ['id'], {
  $id: 'TransactionData',
  additionalProperties: false
})
export type TransactionData = Static<typeof transactionDataSchema>
export const transactionDataValidator = getDataValidator(transactionDataSchema, dataValidator)
export const transactionDataResolver = resolve<Transaction, HookContext>({
  properties: { }
})

// Schema for allowed query properties
export const transactionQueryProperties = Type.Object(
  transactionSchema.properties, 
  {  
   additionalProperties: false
  })
export const transactionQuerySchema = querySyntax(transactionQueryProperties)
export type TransactionQuery = Static<typeof transactionQuerySchema>
export const transactionQueryValidator = getValidator(transactionQuerySchema, queryValidator)
export const transactionQueryResolver = resolve<TransactionQuery, HookContext>({
  properties: {}
})
