import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  sampleDataValidator,
  sampleQueryValidator,
  sampleResolver,
  sampleDataResolver,
  sampleQueryResolver,
  sampleExternalResolver
} from './sample.schema'

import type { Application } from '../../declarations'
import { SampleService, getOptions } from './sample.class'

export * from './sample.class'
export * from './sample.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const sample = (app: Application) => {
  // Register our service on the Feathers application
  app.use('sample', new SampleService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('sample').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(sampleQueryValidator),
        schemaHooks.validateData(sampleDataValidator),
        schemaHooks.resolveQuery(sampleQueryResolver),
        schemaHooks.resolveData(sampleDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(sampleResolver), schemaHooks.resolveExternal(sampleExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    sample: SampleService
  }
}
