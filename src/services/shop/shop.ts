import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  shopDataValidator,
  shopQueryValidator,
  shopResolver,
  shopDataResolver,
  shopQueryResolver,
  shopExternalResolver
} from './shop.schema'

import type { Application, HookContext } from '../../declarations'
import { ShopService, getOptions } from './shop.class'
import { numberOfLength } from '../../utils/number-gen'

export * from './shop.class'
export * from './shop.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const shop = (app: Application) => {
  // Register our service on the Feathers application
  app.use('shop', new ShopService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('shop').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(shopQueryValidator),
        schemaHooks.validateData(shopDataValidator),
        schemaHooks.resolveQuery(shopQueryResolver),
        schemaHooks.resolveData(shopDataResolver)
      ],
      create: [
        async (context: HookContext) => {
          console.log(`Running hook generateShopId on ${context.path}.${context.method}`)
          
          //const biz = await context.app.service('business')._get(context.data.businessId, {
           // query: { 
          //    $select: ['name']
         //   }
        //  });

          const shopName:string = context.data.shopName;
          const shopId = shopName + '-' + numberOfLength(6)
          context.data.id = shopId;
        }        
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
    shop: ShopService
  }
}
