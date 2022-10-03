import type { Application } from '../../declarations'

import { ShopsService, shopsHooks } from './shops.class'

// A configure function that registers the service and its hooks via `app.configure`
export function shops(app: Application) {
  const options = {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'shops'
    // Service options will go here
  }

  // Register our service on the Feathers application
  app.use('shops', new ShopsService(options), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('shops').hooks(shopsHooks)
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    shops: ShopsService
  }
}
