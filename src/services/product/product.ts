// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  productDataValidator,
  productPatchValidator,
  productQueryValidator,
  productResolver,
  productExternalResolver,
  productDataResolver,
  productPatchResolver,
  productQueryResolver
} from './product.schema'

import type { Application } from '../../declarations'
import { ProductService, getOptions } from './product.class'
import { resolveToNumber } from '../../hooks/resolve-to-number'
import percentEncode from '@stdlib/string-percent-encode'

export * from './product.class'
export * from './product.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const product = (app: Application) => {
  // Register our service on the Feathers application
  app.use('product', new ProductService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('product').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(productExternalResolver),
        schemaHooks.resolveResult(productResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(productQueryValidator), schemaHooks.resolveQuery(productQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(productDataValidator), schemaHooks.resolveData(productDataResolver)],
      patch: [schemaHooks.validateData(productPatchValidator), schemaHooks.resolveData(productPatchResolver)],
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
    product: ProductService
  }
}
