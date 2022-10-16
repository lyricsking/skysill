import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  brolesDataValidator,
  brolesQueryValidator,
  brolesResolver,
  brolesDataResolver,
  brolesQueryResolver,
  brolesExternalResolver
} from './broles.schema'

import type { Application } from '../../declarations'
import { BrolesService, getOptions } from './broles.class'

export * from './broles.class'
export * from './broles.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const broles = (app: Application) => {
  // Register our service on the Feathers application
  app.use('broles', new BrolesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('broles').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(brolesQueryValidator),
        schemaHooks.validateData(brolesDataValidator),
        schemaHooks.resolveQuery(brolesQueryResolver),
        schemaHooks.resolveData(brolesDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(brolesResolver), schemaHooks.resolveExternal(brolesExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    broles: BrolesService
  }
}
