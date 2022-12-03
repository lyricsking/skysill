import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'
import { passwordHash } from '@feathersjs/authentication-local'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'
import { walletSchema } from '../wallet/wallet.schema'

// Main data model schema
export const userSchema = Type.Object(
  {
    id: Type.String(),
    firstname: Type.Optional(Type.String()),
    lastname: Type.Optional(Type.String()),
    phone: Type.String(),
    email: Type.Optional(Type.String()),
    password: Type.Optional(Type.String()),
    wallet: Type.Optional(Type.Ref(walletSchema))
  },
  { $id: 'User', additionalProperties: false }
)
export type User = Static<typeof userSchema>
export const userResolver = resolve<User, HookContext>({
  properties: {
    wallet: async (_value, user, context) => {
      // Associate the user's wallet.
      const wallet = await context.app.service('wallet').find({
        query: { 
          $limit: 1,
          owner: "user",
          ownerId: user.id,
        }
      });

      return wallet.data[0];
    }
  }
})

export const userExternalResolver = resolve<User, HookContext>({
  properties: {
    // The password should never be visible externally
    password: async () => undefined,
  }
})

// Schema for the basic data model (e.g. creating new entries)
export const userDataSchema = Type.Omit(
  userSchema,
  ['id', 'wallet'],
  {
    $id: 'UserData',
    additionalProperties: false
  })
export type UserData = Static<typeof userDataSchema>
export const userDataValidator = getDataValidator(userDataSchema, dataValidator)
export const userDataResolver = resolve<User, HookContext>({
  properties: {
    password: passwordHash({ strategy: 'local' })
  }
})

// Schema for allowed query properties
export const userQueryProperties = Type.Omit(userSchema, ['password', 'wallet'])
export const userQuerySchema = querySyntax(userQueryProperties)
export type UserQuery = Static<typeof userQuerySchema>
export const userQueryValidator = getValidator(userQuerySchema, queryValidator)
export const userQueryResolver = resolve<UserQuery, HookContext>({
  properties: {
    // If there is a user (e.g. with authentication), they are only allowed to see their own data
    id: async (value, user, context) => {
      if (context.params.user) {
        return context.params.user.id
      }

      return value
    }
  }
})
