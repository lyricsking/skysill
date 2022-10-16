import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  pcategoriesDataValidator,
  pcategoriesQueryValidator,
  pcategoriesResolver,
  pcategoriesDataResolver,
  pcategoriesQueryResolver,
  pcategoriesExternalResolver
} from './pcategories.schema'

import type { Application } from '../../declarations'
import { PcategoriesService, getOptions } from './pcategories.class'

export * from './pcategories.class'
export * from './pcategories.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const pcategories = (app: Application) => {
  // Register our service on the Feathers application
  app.use('pcategories', new PcategoriesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('pcategories').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(pcategoriesQueryValidator),
        schemaHooks.validateData(pcategoriesDataValidator),
        schemaHooks.resolveQuery(pcategoriesQueryResolver),
        schemaHooks.resolveData(pcategoriesDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(pcategoriesResolver),
        schemaHooks.resolveExternal(pcategoriesExternalResolver)
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
    pcategories: PcategoriesService
  }
}
