import type { Application } from '../../declarations'

import { BusinessService, businessHooks } from './business.class'

// A configure function that registers the service and its hooks via `app.configure`
export function business(app: Application) {
  const options = {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'business'
    // Service options will go here
  }

  // Register our service on the Feathers application
  app.use('business', new BusinessService(options), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('business').hooks(businessHooks)
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    business: BusinessService
  }
}
