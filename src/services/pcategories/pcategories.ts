import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  productCategoryDataValidator,
  productCategoryQueryValidator,
  productCategoryResolver,
  productCategoryDataResolver,
  productCategoryQueryResolver,
  productCategoryExternalResolver
} from './pcategories.schema'

import type { Application } from '../../declarations'
import { ProductCategoryService, getOptions } from './pcategories.class'

export * from './pcategories.class'
export * from './pcategories.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const productCategory = (app: Application) => {
  // Register our service on the Feathers application
  app.use('pcategories', new ProductCategoryService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('pcategories').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(productCategoryQueryValidator),
        schemaHooks.validateData(productCategoryDataValidator),
        schemaHooks.resolveQuery(productCategoryQueryResolver),
        schemaHooks.resolveData(productCategoryDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(productCategoryResolver),
        schemaHooks.resolveExternal(productCategoryExternalResolver)
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
    pcategories: ProductCategoryService
  }
}
