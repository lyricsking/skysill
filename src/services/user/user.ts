import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  userDataValidator,
  userQueryValidator,
  userResolver,
  userDataResolver,
  userQueryResolver,
  userExternalResolver
} from './user.schema'

import type { Application } from '../../declarations'
import { UserService, getOptions } from './user.class'
import { createWallet } from '../../hooks/create-wallet'
import { generateId } from '../../hooks/generate-id'
import { sendVerificationCode } from '../../hooks/send-verification-code'

export * from './user.class'
export * from './user.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const user = (app: Application) => {
  // Register our service on the Feathers application
  app.use('user', new UserService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('user').hooks({
    around: {
      all: [],
      find: [authenticate('jwt')],
      get: [authenticate('jwt')],
      create: [],
      update: [authenticate('jwt')],
      patch: [authenticate('jwt')],
      remove: [authenticate('jwt')]
    },
    before: {
      all: [
        schemaHooks.validateQuery(userQueryValidator),
        schemaHooks.validateData(userDataValidator),
        schemaHooks.resolveQuery(userQueryResolver),
        schemaHooks.resolveData(userDataResolver)
      ],
      create: [generateId(10)]
    },
    after: {
      all: [schemaHooks.resolveResult(userResolver), schemaHooks.resolveExternal(userExternalResolver)],
      create: [createWallet, sendVerificationCode]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    user: UserService
  }
}