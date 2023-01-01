// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  shopDataValidator,
  shopPatchValidator,
  shopQueryValidator,
  shopResolver,
  shopExternalResolver,
  shopDataResolver,
  shopPatchResolver,
  shopQueryResolver
} from './shop.schema'

import type { Application } from '../../declarations'
import { ShopService, getOptions } from './shop.class'
import { beforeCreateShodId } from '../../hooks/before-create-shod-id'

export * from './shop.class'
export * from './shop.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const shop = (app: Application) => {
  // Register our service on the Feathers application
  app.use('shop', new ShopService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('shop').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(shopExternalResolver),
        schemaHooks.resolveResult(shopResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(shopQueryValidator), schemaHooks.resolveQuery(shopQueryResolver)],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(shopDataValidator), 
        schemaHooks.resolveData(shopDataResolver),
        beforeCreateShodId
      ],
      patch: [schemaHooks.validateData(shopPatchValidator), schemaHooks.resolveData(shopPatchResolver)],
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
    shop: ShopService
  }
}
