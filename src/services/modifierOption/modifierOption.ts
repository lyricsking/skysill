// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  modifierOptionDataValidator,
  modifierOptionPatchValidator,
  modifierOptionQueryValidator,
  modifierOptionResolver,
  modifierOptionExternalResolver,
  modifierOptionDataResolver,
  modifierOptionPatchResolver,
  modifierOptionQueryResolver
} from './modifierOption.schema'

import type { Application } from '../../declarations'
import { ModifierOptionService, getOptions } from './modifierOption.class'

export * from './modifierOption.class'
export * from './modifierOption.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const modifierOption = (app: Application) => {
  // Register our service on the Feathers application
  app.use('modifierOption', new ModifierOptionService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('modifierOption').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(modifierOptionExternalResolver),
        schemaHooks.resolveResult(modifierOptionResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(modifierOptionQueryValidator),
        schemaHooks.resolveQuery(modifierOptionQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(modifierOptionDataValidator),
        schemaHooks.resolveData(modifierOptionDataResolver)
      ],
      patch: [
        schemaHooks.validateData(modifierOptionPatchValidator),
        schemaHooks.resolveData(modifierOptionPatchResolver)
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
    modifierOption: ModifierOptionService
  }
}
