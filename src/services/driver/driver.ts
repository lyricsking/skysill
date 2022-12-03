import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  driversDataValidator,
  driversQueryValidator,
  driversResolver,
  driversDataResolver,
  driversQueryResolver,
  driversExternalResolver
} from './driver.schema'

import type { Application } from '../../declarations'
import { DriversService, getOptions } from './driver.class'

export * from './driver.class'
export * from './driver.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const drivers = (app: Application) => {
  // Register our service on the Feathers application
  app.use('drivers', new DriversService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('drivers').hooks({
    around: {
      all: [authenticate('jwt')]
    },
    before: {
      all: [
        schemaHooks.validateQuery(driversQueryValidator),
        schemaHooks.validateData(driversDataValidator),
        schemaHooks.resolveQuery(driversQueryResolver),
        schemaHooks.resolveData(driversDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(driversResolver), schemaHooks.resolveExternal(driversExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    drivers: DriversService
  }
}
