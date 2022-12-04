import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  productModifierDataValidator,
  productModifierQueryValidator,
  productModifierResolver,
  productModifierDataResolver,
  productModifierQueryResolver,
  productModifierExternalResolver
} from './product_modifier.schema'

import type { Application } from '../../declarations'
import { ProductModifierService, getOptions } from './product_modifier.class'

export * from './product_modifier.class'
export * from './product_modifier.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const productModifier = (app: Application) => {
  // Register our service on the Feathers application
  app.use('productModifier', new ProductModifierService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('productModifier').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(productModifierQueryValidator),
        schemaHooks.validateData(productModifierDataValidator),
        schemaHooks.resolveQuery(productModifierQueryResolver),
        schemaHooks.resolveData(productModifierDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(productModifierResolver),
        schemaHooks.resolveExternal(productModifierExternalResolver)
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
    productModifier: ProductModifierService
  }
}
