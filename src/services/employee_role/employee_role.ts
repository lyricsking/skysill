import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  employeeRoleDataValidator,
  employeeRoleQueryValidator,
  employeeRoleResolver,
  employeeRoleDataResolver,
  employeeRoleQueryResolver,
  employeeRoleExternalResolver
} from './employee_role.schema'

import type { Application } from '../../declarations'
import { EmployeeRoleService, getOptions } from './employee_role.class'

export * from './employee_role.class'
export * from './employee_role.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const employeeRole = (app: Application) => {
  // Register our service on the Feathers application
  app.use('employeeRole', new EmployeeRoleService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('employeeRole').hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(employeeRoleQueryValidator),
        schemaHooks.validateData(employeeRoleDataValidator),
        schemaHooks.resolveQuery(employeeRoleQueryResolver),
        schemaHooks.resolveData(employeeRoleDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(employeeRoleResolver), schemaHooks.resolveExternal(employeeRoleExternalResolver)]
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
