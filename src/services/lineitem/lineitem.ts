import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  lineitemDataValidator,
  lineitemQueryValidator,
  lineitemResolver,
  lineitemDataResolver,
  lineitemQueryResolver,
  lineitemExternalResolver
} from './lineitem.schema'

import type { Application } from '../../declarations'
import { LineitemService, getOptions } from './lineitem.class'

export * from './lineitem.class'
export * from './lineitem.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const lineitem = (app: Application) => {
  // Register our service on the Feathers application
  app.use('lineitem', new LineitemService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('lineitem').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(lineitemQueryValidator),
        schemaHooks.validateData(lineitemDataValidator),
        schemaHooks.resolveQuery(lineitemQueryResolver),
        schemaHooks.resolveData(lineitemDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(lineitemResolver),
        schemaHooks.resolveExternal(lineitemExternalResolver)
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
    lineitem: LineitemService
  }
}
