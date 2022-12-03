import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  walletDataValidator,
  walletQueryValidator,
  walletResolver,
  walletDataResolver,
  walletQueryResolver,
  walletExternalResolver
} from './wallet.schema'

import type { Application } from '../../declarations'
import { WalletService, getOptions } from './wallet.class'

export * from './wallet.class'
export * from './wallet.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const wallet = (app: Application) => {
  // Register our service on the Feathers application
  app.use('wallet', new WalletService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('wallet').hooks({
    around: {
      all: [],
      find: [authenticate('jwt')],
      get: [authenticate('jwt')],
      create: [],
      update: [authenticate('jwt')],
      patch: [authenticate('jwt')],
      remove: [authenticate('jwt')]
    },
    before: {
      all: [
        schemaHooks.validateQuery(walletQueryValidator),
        schemaHooks.validateData(walletDataValidator),
        schemaHooks.resolveQuery(walletQueryResolver),
        schemaHooks.resolveData(walletDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(walletResolver), schemaHooks.resolveExternal(walletExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    wallet: WalletService
  }
}
