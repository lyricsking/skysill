import { feathers } from '@feathersjs/feathers'
import type {
  ShopsData,
  ShopsPatch,
  ShopsResult,
  ShopsQuery,
} from './services/shops/shops.schema'

export type {
  ShopsData,
  ShopsPatch,
  ShopsResult,
  ShopsQuery,
}
import type {
  BusinessData,
  BusinessPatch,
  BusinessResult,
  BusinessQuery,
} from './services/business/business.schema'

export type {
  BusinessData,
  BusinessPatch,
  BusinessResult,
  BusinessQuery,
}
import type {
  ShoppersData,
  ShoppersPatch,
  ShoppersResult,
  ShoppersQuery,
} from './services/shoppers/shoppers.schema'

export type {
  ShoppersData,
  ShoppersPatch,
  ShoppersResult,
  ShoppersQuery,
}
import type {
  UsersData,
  UsersPatch,
  UsersResult,
  UsersQuery,
} from './services/users/users.schema'

export type {
  UsersData,
  UsersPatch,
  UsersResult,
  UsersQuery,
}
import type { Paginated, ClientService, TransportConnection, Params } from '@feathersjs/feathers'

export interface ServiceTypes {
  'shops': ClientService<
    ShopsResult,
    ShopsData,
    ShopsPatch,
    Paginated<ShopsResult>, 
    Params<ShopsQuery>
  >
  'business': ClientService<
    BusinessResult,
    BusinessData,
    BusinessPatch,
    Paginated<BusinessResult>, 
    Params<BusinessQuery>
  >
  'shoppers': ClientService<
    ShoppersResult,
    ShoppersData,
    ShoppersPatch,
    Paginated<ShoppersResult>, 
    Params<ShoppersQuery>
  >
  'users': ClientService<
    UsersResult,
    UsersData,
    UsersPatch,
    Paginated<UsersResult>, 
    Params<UsersQuery>
  >
  // A mapping of client side services
}

export const createClient = <Configuration = any>(connection: TransportConnection<ServiceTypes>) => {
  const client = feathers<ServiceTypes, Configuration>()

  client.configure(connection)

  return client
}
