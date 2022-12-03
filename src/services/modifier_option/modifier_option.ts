import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  poptionsDataValidator,
  poptionsQueryValidator,
  poptionsResolver,
  poptionsDataResolver,
  poptionsQueryResolver,
  poptionsExternalResolver
} from './modifier_option.schema'

import type { Application } from '../../declarations'
import { PoptionsService, getOptions } from './modifier_option.class'

export * from './modifier_option.class'
export * from './modifier_option.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const poptions = (app: Application) => {
  // Register our service on the Feathers application
  app.use('poptions', new PoptionsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('poptions').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(poptionsQueryValidator),
        schemaHooks.validateData(poptionsDataValidator),
        schemaHooks.resolveQuery(poptionsQueryResolver),
        schemaHooks.resolveData(poptionsDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(poptionsResolver),
        schemaHooks.resolveExternal(poptionsExternalResolver)
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
    poptions: PoptionsService
  }
}
