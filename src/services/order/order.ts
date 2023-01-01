// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  orderDataValidator,
  orderPatchValidator,
  orderQueryValidator,
  orderResolver,
  orderExternalResolver,
  orderDataResolver,
  orderPatchResolver,
  orderQueryResolver
} from './order.schema'

import type { Application } from '../../declarations'
import { OrderService, getOptions } from './order.class'
import { aroundPatchOrder } from '../../hooks/around-patch-order'
import { generateId } from '../../hooks/generate-id'

export * from './order.class'
export * from './order.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const order = (app: Application) => {
  // Register our service on the Feathers application
  app.use('order', new OrderService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('order').hooks({
    around: {
      all: [schemaHooks.resolveExternal(orderExternalResolver), schemaHooks.resolveResult(orderResolver)],
      patch: [aroundPatchOrder]
    },
    before: {
      all: [schemaHooks.validateQuery(orderQueryValidator), schemaHooks.resolveQuery(orderQueryResolver)],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(orderDataValidator), 
        schemaHooks.resolveData(orderDataResolver),
        generateId(11)
      ],
      patch: [schemaHooks.validateData(orderPatchValidator), schemaHooks.resolveData(orderPatchResolver)],
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
    order: OrderService
  }
}
