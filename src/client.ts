import { feathers } from '@feathersjs/feathers'
import type { AuthenticationService } from '@feathersjs/authentication'

import type { User, UserData, UserQuery, UserService } from './services/users/users'
export type { User, UserData, UserQuery }

import type { TransportConnection, Params } from '@feathersjs/feathers'
const userServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type UserClientService = Pick<UserService<Params<UserQuery>>, typeof userServiceMethods[number]>

export interface ServiceTypes {
  authentication: Pick<AuthenticationService, 'create' | 'remove'>
  users: UserClientService
  //
}

export const createClient = <Configuration = any>(connection: TransportConnection<ServiceTypes>) => {
  const client = feathers<ServiceTypes, Configuration>()

  client.configure(connection)

  client.use('users', connection.service('users'), {
    methods: userServiceMethods
  })
  return client
}
