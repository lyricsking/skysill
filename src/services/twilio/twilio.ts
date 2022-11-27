import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  twilioDataValidator,
  twilioQueryValidator,
  twilioResolver,
  twilioDataResolver,
  twilioQueryResolver,
  twilioExternalResolver
} from './twilio.schema'

import type { Application } from '../../declarations'
import { TwilioService, getOptions } from './twilio.class'

export * from './twilio.class'
export * from './twilio.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const twilio = (app: Application) => {
  // Register our service on the Feathers application
  app.use('twilio', new TwilioService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['sendVerification', 'verify'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('twilio').hooks({
    around: {
      all: [authenticate('jwt')]
    },
    before: {
      all: [
        schemaHooks.validateQuery(twilioQueryValidator),
        schemaHooks.validateData(twilioDataValidator),
        schemaHooks.resolveQuery(twilioQueryResolver),
        schemaHooks.resolveData(twilioDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(twilioResolver), schemaHooks.resolveExternal(twilioExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    twilio: TwilioService
  }
}
