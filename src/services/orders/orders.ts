import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  ordersDataValidator,
  ordersQueryValidator,
  ordersResolver,
  ordersDataResolver,
  ordersQueryResolver,
  ordersExternalResolver
} from './orders.schema'

import type { Application } from '../../declarations'
import { OrdersService, getOptions } from './orders.class'

export * from './orders.class'
export * from './orders.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const orders = (app: Application) => {
  // Register our service on the Feathers application
  app.use('orders', new OrdersService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('orders').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(ordersQueryValidator),
        schemaHooks.validateData(ordersDataValidator),
        schemaHooks.resolveQuery(ordersQueryResolver),
        schemaHooks.resolveData(ordersDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(ordersResolver), schemaHooks.resolveExternal(ordersExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    orders: OrdersService
  }
}
