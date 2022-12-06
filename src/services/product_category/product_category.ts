import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  productCategoryDataValidator,
  productCategoryQueryValidator,
  productCategoryResolver,
  productCategoryDataResolver,
  productCategoryQueryResolver,
  productCategoryExternalResolver
} from './product_category.schema'

import type { Application, HookContext } from '../../declarations'
import { ProductCategoryService, getOptions } from './product_category.class'

export * from './product_category.class'
export * from './product_category.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const productCategory = (app: Application) => {
  // Register our service on the Feathers application
  app.use('productCategory', new ProductCategoryService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('productCategory').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(productCategoryQueryValidator),
        schemaHooks.validateData(productCategoryDataValidator),
        schemaHooks.resolveQuery(productCategoryQueryResolver),
        schemaHooks.resolveData(productCategoryDataResolver)
      ],
      create: [
        async (context: HookContext) => {
          console.log(`Running hook on ${context.path}.${context.method}`)

          context.data.id = context.data.businessId + '-' + context.data.name;
        }
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
    productCategory: ProductCategoryService
  }
}
