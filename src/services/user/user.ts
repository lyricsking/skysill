import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  userDataValidator,
  userQueryValidator,
  userResolver,
  userDataResolver,
  userQueryResolver,
  userExternalResolver,
  User
} from './user.schema'

import type { Application, HookContext } from '../../declarations'
import { UserService, getOptions } from './user.class'
import { createWallet } from '../../hooks/create-wallet'
import { generateId } from '../../hooks/generate-id'
import { resolveToNumber } from '../../hooks/resolve-to-number'
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
  
  const user = app.service('user')
  // Initialize hooks
  user.hooks({
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
      create: [createWallet]
    },
    error: {
      all: []
    }
  })

  user.on('created', (user: User, context: HookContext) => {
    console.log(`Running created event on ${context.path}.${context.method}`)
    
    context.app.service('twilio').sendVerification(user.phone)
  });
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    user: UserService
  }
}
