// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  modifierDataValidator,
  modifierPatchValidator,
  modifierQueryValidator,
  modifierResolver,
  modifierExternalResolver,
  modifierDataResolver,
  modifierPatchResolver,
  modifierQueryResolver
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
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('modifier').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(modifierExternalResolver),
        schemaHooks.resolveResult(modifierResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(modifierQueryValidator),
        schemaHooks.resolveQuery(modifierQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(modifierDataValidator),
        schemaHooks.resolveData(modifierDataResolver)
      ],
      patch: [
        schemaHooks.validateData(modifierPatchValidator),
        schemaHooks.resolveData(modifierPatchResolver)
      ],
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
    modifier: ModifierService
  }
}
