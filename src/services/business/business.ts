import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  businessDataValidator,
  businessQueryValidator,
  businessResolver,
  businessDataResolver,
  businessQueryResolver,
  businessExternalResolver
} from './business.schema'

import type { Application } from '../../declarations'
import { BusinessService, getOptions } from './business.class'
import { generateId } from '../../hooks/generate-id'
import { generateBusinessId } from '../../hooks/generate-business-id'

export * from './business.class'
export * from './business.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const business = (app: Application) => {
  // Register our service on the Feathers application
  app.use('business', new BusinessService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('business').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(businessQueryValidator),
        schemaHooks.validateData(businessDataValidator),
        schemaHooks.resolveQuery(businessQueryResolver),
        schemaHooks.resolveData(businessDataResolver)
      ],
      create: [generateBusinessId]
    },
    after: {
      all: [
        schemaHooks.resolveResult(businessResolver),
        schemaHooks.resolveExternal(businessExternalResolver)
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
    business: BusinessService
  }
}
