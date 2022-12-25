import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  shipdayOrderDataValidator,
  shipdayOrderQueryValidator,
  shipdayOrderResolver,
  shipdayOrderDataResolver,
  shipdayOrderQueryResolver,
  shipdayOrderExternalResolver
} from './shipday-order.schema'

import type { Application } from '../../declarations'
import { ShipdayOrderService, getOptions } from './shipday-order.class'

export * from './shipday-order.class'
export * from './shipday-order.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const shipdayOrder = (app: Application) => {
  // Register our service on the Feathers application
  app.use('shipday-order', new ShipdayOrderService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('shipday-order').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(shipdayOrderQueryValidator),
        schemaHooks.validateData(shipdayOrderDataValidator),
        schemaHooks.resolveQuery(shipdayOrderQueryResolver),
        schemaHooks.resolveData(shipdayOrderDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(shipdayOrderResolver),
        schemaHooks.resolveExternal(shipdayOrderExternalResolver)
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
    'shipday-order': ShipdayOrderService
  }
}
