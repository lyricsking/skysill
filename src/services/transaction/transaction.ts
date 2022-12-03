import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  transactionsDataValidator,
  transactionsQueryValidator,
  transactionsResolver,
  transactionsDataResolver,
  transactionsQueryResolver,
  transactionsExternalResolver
} from './transaction.schema'

import type { Application } from '../../declarations'
import { TransactionsService, getOptions } from './transaction.class'
import { patchWalletBalance } from '../../hooks/patch-wallet-balance'
import { generateId } from '../../hooks/generate-id'

export * from './transaction.class'
export * from './transaction.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const transactions = (app: Application) => {
  // Register our service on the Feathers application
  app.use('transactions', new TransactionsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('transactions').hooks({
    around: {
      all: [authenticate('jwt')]
    },
    before: {
      all: [
        schemaHooks.validateQuery(transactionsQueryValidator),
        schemaHooks.validateData(transactionsDataValidator),
        schemaHooks.resolveQuery(transactionsQueryResolver),
        schemaHooks.resolveData(transactionsDataResolver)
      ],
    },
    after: {
      all: [
        schemaHooks.resolveResult(transactionsResolver),
        schemaHooks.resolveExternal(transactionsExternalResolver)
      ],
      create: [patchWalletBalance],
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    transactions: TransactionsService
  }
}
