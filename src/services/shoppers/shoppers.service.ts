import type { Application } from '../../declarations'

import { ShoppersService, shoppersHooks } from './shoppers.class'

// A configure function that registers the service and its hooks via `app.configure`
export function shoppers(app: Application) {
  const options = {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'shoppers'
    // Service options will go here
  }

  // Register our service on the Feathers application
  app.use('shoppers', new ShoppersService(options), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('shoppers').hooks(shoppersHooks)
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    shoppers: ShoppersService
  }
}
