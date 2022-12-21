import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  orderDataValidator,
  orderQueryValidator,
  orderResolver,
  orderDataResolver,
  orderQueryResolver,
  orderExternalResolver
} from './order.schema'

import type { Application, HookContext } from '../../declarations'
import { OrderService, getOptions } from './order.class'
import { resolveToNumber } from '../../hooks/resolve-to-number'
import { generateId } from '../../hooks/generate-id'

export * from './order.class'
export * from './order.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const order = (app: Application) => {
  // Register our service on the Feathers application
  app.use('order', new OrderService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('order').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(orderQueryValidator),
        resolveToNumber(['subtotal', 'deliveryFee']),
        schemaHooks.validateData(orderDataValidator),
        schemaHooks.resolveQuery(orderQueryResolver),
        schemaHooks.resolveData(orderDataResolver)
      ],
      create: [
        generateId(11)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(orderResolver), schemaHooks.resolveExternal(orderExternalResolver)]
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
