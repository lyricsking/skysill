// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  walletDataValidator,
  walletPatchValidator,
  walletQueryValidator,
  walletResolver,
  walletExternalResolver,
  walletDataResolver,
  walletPatchResolver,
  walletQueryResolver
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
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('wallet').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(walletExternalResolver),
        schemaHooks.resolveResult(walletResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(walletQueryValidator), schemaHooks.resolveQuery(walletQueryResolver)],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(walletDataValidator), 
        schemaHooks.resolveData(walletDataResolver),
        
      ],
      patch: [schemaHooks.validateData(walletPatchValidator), schemaHooks.resolveData(walletPatchResolver)],
      remove: []
    },
    after: {
      all: []
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
