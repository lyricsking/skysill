// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  shipdayDriverDataValidator,
  shipdayDriverPatchValidator,
  shipdayDriverQueryValidator,
  shipdayDriverResolver,
  shipdayDriverExternalResolver,
  shipdayDriverDataResolver,
  shipdayDriverPatchResolver,
  shipdayDriverQueryResolver
} from './shipdayDriver.schema'

import type { Application } from '../../declarations'
import { ShipdayDriverService, getOptions } from './shipdayDriver.class'

export * from './shipdayDriver.class'
export * from './shipdayDriver.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const shipdayDriver = (app: Application) => {
  // Register our service on the Feathers application
  app.use('shipdayDriver', new ShipdayDriverService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('shipdayDriver').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(shipdayDriverExternalResolver),
        schemaHooks.resolveResult(shipdayDriverResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(shipdayDriverQueryValidator),
        schemaHooks.resolveQuery(shipdayDriverQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(shipdayDriverDataValidator),
        schemaHooks.resolveData(shipdayDriverDataResolver)
      ],
      patch: [
        schemaHooks.validateData(shipdayDriverPatchValidator),
        schemaHooks.resolveData(shipdayDriverPatchResolver)
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
    shipdayDriver: ShipdayDriverService
  }
}
