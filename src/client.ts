import { feathers } from '@feathersjs/feathers'
import type { Business, BusinessData, BusinessQuery, BusinessService } from './services/business/business'
export type { Business, BusinessData, BusinessQuery }

import type { UsersData, UsersPatch, UsersResult, UsersQuery } from './services/users/users.schema'

export type { UsersData, UsersPatch, UsersResult, UsersQuery }
import type { Paginated, ClientService, TransportConnection, Params } from '@feathersjs/feathers'
const businessServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type BusinessClientService = Pick<
  BusinessService<Params<BusinessQuery>>,
  typeof businessServiceMethods[number]
>

export interface ServiceTypes {
  business: BusinessClientService
  users: ClientService<UsersResult, UsersData, UsersPatch, Paginated<UsersResult>, Params<UsersQuery>>
  // A mapping of client side services
}

export const createClient = <Configuration = any>(connection: TransportConnection<ServiceTypes>) => {
  const client = feathers<ServiceTypes, Configuration>()

  client.configure(connection)

  client.use('business', connection.service('business'), {
    methods: businessServiceMethods
  })
  return client
}
