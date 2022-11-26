import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  walletsDataValidator,
  walletsQueryValidator,
  walletsResolver,
  walletsDataResolver,
  walletsQueryResolver,
  walletsExternalResolver
} from './wallets.schema'

import type { Application } from '../../declarations'
import { WalletsService, getOptions } from './wallets.class'

export * from './wallets.class'
export * from './wallets.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const wallets = (app: Application) => {
  // Register our service on the Feathers application
  app.use('wallets', new WalletsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('wallets').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(walletsQueryValidator),
        schemaHooks.validateData(walletsDataValidator),
        schemaHooks.resolveQuery(walletsQueryResolver),
        schemaHooks.resolveData(walletsDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(walletsResolver), schemaHooks.resolveExternal(walletsExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    wallets: WalletsService
  }
}
