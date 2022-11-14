import { feathers } from '@feathersjs/feathers'
import type {
  Transactions,
  TransactionsData,
  TransactionsQuery,
  TransactionsService
} from './services/transactions/transactions'
export type { Transactions, TransactionsData, TransactionsQuery }

import type { Wallets, WalletsData, WalletsQuery, WalletsService } from './services/wallets/wallets'
export type { Wallets, WalletsData, WalletsQuery }

import type { Shops, ShopsData, ShopsQuery, ShopsService } from './services/shops/shops'
export type { Shops, ShopsData, ShopsQuery }

import type { Products, ProductsData, ProductsQuery, ProductsService } from './services/products/products'
export type { Products, ProductsData, ProductsQuery }

import type { Poptions, PoptionsData, PoptionsQuery, PoptionsService } from './services/poptions/poptions'
export type { Poptions, PoptionsData, PoptionsQuery }

import type {
  Pmodifiers,
  PmodifiersData,
  PmodifiersQuery,
  PmodifiersService
} from './services/pmodifiers/pmodifiers'
export type { Pmodifiers, PmodifiersData, PmodifiersQuery }

import type {
  Pcategories,
  PcategoriesData,
  PcategoriesQuery,
  PcategoriesService
} from './services/pcategories/pcategories'
export type { Pcategories, PcategoriesData, PcategoriesQuery }

import type { Orders, OrdersData, OrdersQuery, OrdersService } from './services/orders/orders'
export type { Orders, OrdersData, OrdersQuery }

import type {
  Lineitems,
  LineitemsData,
  LineitemsQuery,
  LineitemsService
} from './services/lineitems/lineitems'
export type { Lineitems, LineitemsData, LineitemsQuery }

import type { Business, BusinessData, BusinessQuery, BusinessService } from './services/business/business'
export type { Business, BusinessData, BusinessQuery }

import type { Broles, BrolesData, BrolesQuery, BrolesService } from './services/broles/broles'
export type { Broles, BrolesData, BrolesQuery }

import type { AuthenticationService } from '@feathersjs/authentication'

import type { User, UserData, UserQuery, UserService } from './services/users/users'
export type { User, UserData, UserQuery }

import type { TransportConnection, Params } from '@feathersjs/feathers'
const userServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type UserClientService = Pick<UserService<Params<UserQuery>>, typeof userServiceMethods[number]>
const brolesServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type BrolesClientService = Pick<BrolesService<Params<BrolesQuery>>, typeof brolesServiceMethods[number]>
const businessServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type BusinessClientService = Pick<
  BusinessService<Params<BusinessQuery>>,
  typeof businessServiceMethods[number]
>
const lineitemsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type LineitemsClientService = Pick<
  LineitemsService<Params<LineitemsQuery>>,
  typeof lineitemsServiceMethods[number]
>
const ordersServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type OrdersClientService = Pick<OrdersService<Params<OrdersQuery>>, typeof ordersServiceMethods[number]>
const pcategoriesServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type PcategoriesClientService = Pick<
  PcategoriesService<Params<PcategoriesQuery>>,
  typeof pcategoriesServiceMethods[number]
>
const pmodifiersServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type PmodifiersClientService = Pick<
  PmodifiersService<Params<PmodifiersQuery>>,
  typeof pmodifiersServiceMethods[number]
>
const poptionsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type PoptionsClientService = Pick<
  PoptionsService<Params<PoptionsQuery>>,
  typeof poptionsServiceMethods[number]
>
const productsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ProductsClientService = Pick<
  ProductsService<Params<ProductsQuery>>,
  typeof productsServiceMethods[number]
>
const shopsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShopsClientService = Pick<ShopsService<Params<ShopsQuery>>, typeof shopsServiceMethods[number]>
const walletsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type WalletsClientService = Pick<WalletsService<Params<WalletsQuery>>, typeof walletsServiceMethods[number]>
const transactionsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type TransactionsClientService = Pick<
  TransactionsService<Params<TransactionsQuery>>,
  typeof transactionsServiceMethods[number]
>

export interface ServiceTypes {
  transactions: TransactionsClientService
  wallets: WalletsClientService
  shops: ShopsClientService
  products: ProductsClientService
  poptions: PoptionsClientService
  pmodifiers: PmodifiersClientService
  pcategories: PcategoriesClientService
  orders: OrdersClientService
  lineitems: LineitemsClientService
  business: BusinessClientService
  broles: BrolesClientService
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
  client.use('broles', connection.service('broles'), {
    methods: brolesServiceMethods
  })
  client.use('business', connection.service('business'), {
    methods: businessServiceMethods
  })
  client.use('lineitems', connection.service('lineitems'), {
    methods: lineitemsServiceMethods
  })
  client.use('orders', connection.service('orders'), {
    methods: ordersServiceMethods
  })
  client.use('pcategories', connection.service('pcategories'), {
    methods: pcategoriesServiceMethods
  })
  client.use('pmodifiers', connection.service('pmodifiers'), {
    methods: pmodifiersServiceMethods
  })
  client.use('poptions', connection.service('poptions'), {
    methods: poptionsServiceMethods
  })
  client.use('products', connection.service('products'), {
    methods: productsServiceMethods
  })
  client.use('shops', connection.service('shops'), {
    methods: shopsServiceMethods
  })
  client.use('wallets', connection.service('wallets'), {
    methods: walletsServiceMethods
  })
  client.use('transactions', connection.service('transactions'), {
    methods: transactionsServiceMethods
  })
  return client
}
