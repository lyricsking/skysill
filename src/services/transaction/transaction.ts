import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import { transaction as transactionHook } from '@feathersjs/knex'

import {
  transactionDataValidator,
  transactionQueryValidator,
  transactionResolver,
  transactionDataResolver,
  transactionQueryResolver,
  transactionExternalResolver
} from './transaction.schema'

import type { Application, HookContext } from '../../declarations'
import { TransactionService, getOptions } from './transaction.class'
import { patchWalletBalance } from '../../hooks/patch-wallet-balance'
import { generateId } from '../../hooks/generate-id'
import { resolveToNumber } from '../../hooks/resolve-to-number'

export * from './transaction.class'
export * from './transaction.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const transaction = (app: Application) => {
  // Register our service on the Feathers application
  app.use('transaction', new TransactionService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('transaction').hooks({
    around: {
      all: [authenticate('jwt')]
    },
    before: {
      all: [
        schemaHooks.validateQuery(transactionQueryValidator),
        resolveToNumber('amount'),
        schemaHooks.validateData(transactionDataValidator),
        schemaHooks.resolveQuery(transactionQueryResolver),
        schemaHooks.resolveData(transactionDataResolver),
        // Transaction start
        transactionHook.start()
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(transactionResolver),
        schemaHooks.resolveExternal(transactionExternalResolver),
        // Transaction ends
        transactionHook.end()
      ],
      create: [
        patchWalletBalance,
      ],
    },
    error: {
      all: [
        // Transaction rollback
        transactionHook.rollback()
      ]
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    transaction: TransactionService
  }
}
