// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  businessDataValidator,
  businessPatchValidator,
  businessQueryValidator,
  businessResolver,
  businessExternalResolver,
  businessDataResolver,
  businessPatchResolver,
  businessQueryResolver
} from './business.schema'

import type { Application } from '../../declarations'
import { BusinessService, getOptions } from './business.class'
import { generateId } from '../../hooks/generate-id'
import { numberOfLength } from '../../utils/number-gen'
import percentEncode from '@stdlib/string-percent-encode'
import { createBusinessId } from '../../hooks/create-business-id'

export * from './business.class'
export * from './business.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const business = (app: Application) => {
  // Register our service on the Feathers application
  app.use('business', new BusinessService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('business').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(businessExternalResolver),
        schemaHooks.resolveResult(businessResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(businessQueryValidator),
        schemaHooks.resolveQuery(businessQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(businessDataValidator),
        schemaHooks.resolveData(businessDataResolver), 
        createBusinessId
      ],
      patch: [
        schemaHooks.validateData(businessPatchValidator),
        schemaHooks.resolveData(businessPatchResolver)
      ],
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
    business: BusinessService
  }
}
