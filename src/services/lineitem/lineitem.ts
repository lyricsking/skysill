// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  lineitemDataValidator,
  lineitemPatchValidator,
  lineitemQueryValidator,
  lineitemResolver,
  lineitemExternalResolver,
  lineitemDataResolver,
  lineitemPatchResolver,
  lineitemQueryResolver
} from './lineitem.schema'

import type { Application } from '../../declarations'
import { LineitemService, getOptions } from './lineitem.class'
import { maybeCreateOrder } from '../../hooks/maybe-create-order'

export * from './lineitem.class'
export * from './lineitem.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const lineitem = (app: Application) => {
  // Register our service on the Feathers application
  app.use('lineitem', new LineitemService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('lineitem').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(lineitemExternalResolver),
        schemaHooks.resolveResult(lineitemResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(lineitemQueryValidator),
        schemaHooks.resolveQuery(lineitemQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(lineitemDataValidator),
        schemaHooks.resolveData(lineitemDataResolver),
        maybeCreateOrder
      ],
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
    lineitem: LineitemService
  }
}
