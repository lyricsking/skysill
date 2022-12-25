import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  shipdayDriverDataValidator,
  shipdayDriverQueryValidator,
  shipdayDriverResolver,
  shipdayDriverDataResolver,
  shipdayDriverQueryResolver,
  shipdayDriverExternalResolver
} from './shipday-driver.schema'

import type { Application } from '../../declarations'
import { ShipdayDriverService, getOptions } from './shipday-driver.class'

export * from './shipday-driver.class'
export * from './shipday-driver.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const shipdayDriver = (app: Application) => {
  // Register our service on the Feathers application
  app.use('shipday-driver', new ShipdayDriverService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('shipday-driver').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(shipdayDriverQueryValidator),
        schemaHooks.validateData(shipdayDriverDataValidator),
        schemaHooks.resolveQuery(shipdayDriverQueryResolver),
        schemaHooks.resolveData(shipdayDriverDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(shipdayDriverResolver),
        schemaHooks.resolveExternal(shipdayDriverExternalResolver)
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
    'shipday-driver': ShipdayDriverService
  }
}
