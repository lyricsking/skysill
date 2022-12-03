import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  modifierDataValidator,
  modifierQueryValidator,
  modifierResolver,
  modifierDataResolver,
  modifierQueryResolver,
  modifierExternalResolver
} from './modifier.schema'

import type { Application } from '../../declarations'
import { ModifierService, getOptions } from './modifier.class'

export * from './modifier.class'
export * from './modifier.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const modifier = (app: Application) => {
  // Register our service on the Feathers application
  app.use('modifier', new ModifierService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('modifier').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(modifierQueryValidator),
        schemaHooks.validateData(modifierDataValidator),
        schemaHooks.resolveQuery(modifierQueryResolver),
        schemaHooks.resolveData(modifierDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(modifierResolver),
        schemaHooks.resolveExternal(modifierExternalResolver)
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
    modifier: ModifierService
  }
}
