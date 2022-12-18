import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  productDataValidator,
  productQueryValidator,
  productResolver,
  productDataResolver,
  productQueryResolver,
  productExternalResolver
} from './product.schema'

import type { Application } from '../../declarations'
import { ProductService, getOptions } from './product.class'
import { resolveToNumber } from '../../hooks/resolve-to-number'

export * from './product.class'
export * from './product.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const product = (app: Application) => {
  // Register our service on the Feathers application
  app.use('product', new ProductService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('product').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(productQueryValidator),
        resolveToNumber('price'), resolveToNumber('discount'),
        schemaHooks.validateData(productDataValidator),
        schemaHooks.resolveQuery(productQueryResolver),
        schemaHooks.resolveData(productDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(productResolver),
        schemaHooks.resolveExternal(productExternalResolver)
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
    product: ProductService
  }
}
