import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  pmodifiersDataValidator,
  pmodifiersQueryValidator,
  pmodifiersResolver,
  pmodifiersDataResolver,
  pmodifiersQueryResolver,
  pmodifiersExternalResolver
} from './pmodifiers.schema'

import type { Application } from '../../declarations'
import { PmodifiersService, getOptions } from './pmodifiers.class'

export * from './pmodifiers.class'
export * from './pmodifiers.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const pmodifiers = (app: Application) => {
  // Register our service on the Feathers application
  app.use('pmodifiers', new PmodifiersService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('pmodifiers').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(pmodifiersQueryValidator),
        schemaHooks.validateData(pmodifiersDataValidator),
        schemaHooks.resolveQuery(pmodifiersQueryResolver),
        schemaHooks.resolveData(pmodifiersDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(pmodifiersResolver),
        schemaHooks.resolveExternal(pmodifiersExternalResolver)
      ]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    pmodifiers: PmodifiersService
  }
}
