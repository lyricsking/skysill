// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  employeeRoleDataValidator,
  employeeRolePatchValidator,
  employeeRoleQueryValidator,
  employeeRoleResolver,
  employeeRoleExternalResolver,
  employeeRoleDataResolver,
  employeeRolePatchResolver,
  employeeRoleQueryResolver
} from './employeeRole.schema'

import type { Application } from '../../declarations'
import { EmployeeRoleService, getOptions } from './employeeRole.class'

export * from './employeeRole.class'
export * from './employeeRole.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const employeeRole = (app: Application) => {
  // Register our service on the Feathers application
  app.use('employeeRole', new EmployeeRoleService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('employeeRole').hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(employeeRoleExternalResolver),
        schemaHooks.resolveResult(employeeRoleResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(employeeRoleQueryValidator),
        schemaHooks.resolveQuery(employeeRoleQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(employeeRoleDataValidator),
        schemaHooks.resolveData(employeeRoleDataResolver)
      ],
      patch: [
        schemaHooks.validateData(employeeRolePatchValidator),
        schemaHooks.resolveData(employeeRolePatchResolver)
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
    employeeRole: EmployeeRoleService
  }
}
