import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  productsDataValidator,
  productsQueryValidator,
  productsResolver,
  productsDataResolver,
  productsQueryResolver,
  productsExternalResolver
} from './product.schema'

import type { Application } from '../../declarations'
import { ProductsService, getOptions } from './product.class'

export * from './product.class'
export * from './product.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const products = (app: Application) => {
  // Register our service on the Feathers application
  app.use('products', new ProductsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('products').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(productsQueryValidator),
        schemaHooks.validateData(productsDataValidator),
        schemaHooks.resolveQuery(productsQueryResolver),
        schemaHooks.resolveData(productsDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(productsResolver),
        schemaHooks.resolveExternal(productsExternalResolver)
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
    products: ProductsService
  }
}
