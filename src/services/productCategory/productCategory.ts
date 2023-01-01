// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  productCategoryDataValidator,
  productCategoryPatchValidator,
  productCategoryQueryValidator,
  productCategoryResolver,
  productCategoryExternalResolver,
  productCategoryDataResolver,
  productCategoryPatchResolver,
  productCategoryQueryResolver
} from './productCategory.schema'

import type { Application } from '../../declarations'
import { ProductCategoryService, getOptions } from './productCategory.class'
import { createProductId } from '../../hooks/create-product-id'

export * from './productCategory.class'
export * from './productCategory.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const productCategory = (app: Application) => {
  // Register our service on the Feathers application
  app.use('productCategory', new ProductCategoryService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('productCategory').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(productCategoryExternalResolver),
        schemaHooks.resolveResult(productCategoryResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(productCategoryQueryValidator),
        schemaHooks.resolveQuery(productCategoryQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(productCategoryDataValidator),
        schemaHooks.resolveData(productCategoryDataResolver),
        createProductId
      ],
      patch: [
        schemaHooks.validateData(productCategoryPatchValidator),
        schemaHooks.resolveData(productCategoryPatchResolver)
      ],
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
    productCategory: ProductCategoryService
  }
}
