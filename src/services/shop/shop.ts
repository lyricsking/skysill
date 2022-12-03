import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  shopsDataValidator,
  shopsQueryValidator,
  shopsResolver,
  shopsDataResolver,
  shopsQueryResolver,
  shopsExternalResolver
} from './shop.schema'

import type { Application, HookContext } from '../../declarations'
import { ShopsService, getOptions } from './shop.class'
import { numberOfLength } from '../../utils/number-gen'

export * from './shop.class'
export * from './shop.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const shops = (app: Application) => {
  // Register our service on the Feathers application
  app.use('shops', new ShopsService(getOptions(app)), {
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
        schemaHooks.validateQuery(shopsQueryValidator),
        schemaHooks.validateData(shopsDataValidator),
        schemaHooks.resolveQuery(shopsQueryResolver),
        schemaHooks.resolveData(shopsDataResolver)
      ],
      create: [
        async (context: HookContext) => {
          console.log(`Running hook generateShopId on ${context.path}.${context.method}`)
        
          let shopName:string = context.data.shopName;
          shopName += '-' + numberOfLength(6)
          context.data.shopName = shopName;
        }        
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(shopsResolver), schemaHooks.resolveExternal(shopsExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    shops: ShopsService
  }
}
