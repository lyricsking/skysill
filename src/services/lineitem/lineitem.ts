import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  lineitemsDataValidator,
  lineitemsQueryValidator,
  lineitemsResolver,
  lineitemsDataResolver,
  lineitemsQueryResolver,
  lineitemsExternalResolver
} from './lineitem.schema'

import type { Application } from '../../declarations'
import { LineitemsService, getOptions } from './lineitem.class'

export * from './lineitem.class'
export * from './lineitem.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const lineitems = (app: Application) => {
  // Register our service on the Feathers application
  app.use('lineitems', new LineitemsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('lineitems').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(lineitemsQueryValidator),
        schemaHooks.validateData(lineitemsDataValidator),
        schemaHooks.resolveQuery(lineitemsQueryResolver),
        schemaHooks.resolveData(lineitemsDataResolver)
      ]
    },
    after: {
      all: [
        schemaHooks.resolveResult(lineitemsResolver),
        schemaHooks.resolveExternal(lineitemsExternalResolver)
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
    lineitems: LineitemsService
  }
}
