import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  driverDataValidator,
  driverQueryValidator,
  driverResolver,
  driverDataResolver,
  driverQueryResolver,
  driverExternalResolver
} from './driver.schema'

import type { Application } from '../../declarations'
import { DriverService, getOptions } from './driver.class'

export * from './driver.class'
export * from './driver.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const driver = (app: Application) => {
  // Register our service on the Feathers application
  app.use('driver', new DriverService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('driver').hooks({
    around: {
      all: [authenticate('jwt')]
    },
    before: {
      all: [
        schemaHooks.validateQuery(driverQueryValidator),
        schemaHooks.validateData(driverDataValidator),
        schemaHooks.resolveQuery(driverQueryResolver),
        schemaHooks.resolveData(driverDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(driverResolver), schemaHooks.resolveExternal(driverExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    driver: DriverService
  }
}
