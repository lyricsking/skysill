import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  modifierOptionDataValidator,
  modifierOptionQueryValidator,
  modifierOptionResolver,
  modifierOptionDataResolver,
  modifierOptionQueryResolver,
  modifierOptionExternalResolver
} from './modifier_option.schema'

import type { Application } from '../../declarations'
import { ModifierOptionService, getOptions } from './modifier_option.class'

export * from './modifier_option.class'
export * from './modifier_option.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const modifierOption = (app: Application) => {
  // Register our service on the Feathers application
  app.use('modifierOption', new ModifierOptionService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('modifierOption').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(modifierOptionQueryValidator),
        schemaHooks.validateData(modifierOptionDataValidator),
        schemaHooks.resolveQuery(modifierOptionQueryResolver),
        schemaHooks.resolveData(modifierOptionDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(modifierOptionResolver),
        schemaHooks.resolveExternal(modifierOptionExternalResolver)
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
    modifierOption: ModifierOptionService
  }
}
