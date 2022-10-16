import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  shopDataValidator,
  shopQueryValidator,
  shopResolver,
  shopDataResolver,
  shopQueryResolver,
  shopExternalResolver
} from './shops.schema'

import type { Application } from '../../declarations'
import { ShopService, getOptions } from './shops.class'

export * from './shops.class'
export * from './shops.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const shop = (app: Application) => {
  // Register our service on the Feathers application
  app.use('shops', new ShopService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('shops').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(shopQueryValidator),
        schemaHooks.validateData(shopDataValidator),
        schemaHooks.resolveQuery(shopQueryResolver),
        schemaHooks.resolveData(shopDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(shopResolver), schemaHooks.resolveExternal(shopExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    shops: ShopService
  }
}
