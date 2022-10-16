import { feathers } from '@feathersjs/feathers'
import type {
  Lineitems,
  LineitemsData,
  LineitemsQuery,
  LineitemsService
} from './services/lineitems/lineitems'
export type { Lineitems, LineitemsData, LineitemsQuery }

import type { Orders, OrdersData, OrdersQuery, OrdersService } from './services/orders/orders'
export type { Orders, OrdersData, OrdersQuery }

import type { Poptions, PoptionsData, PoptionsQuery, PoptionsService } from './services/poptions/poptions'
export type { Poptions, PoptionsData, PoptionsQuery }

import type {
  Pmodifiers,
  PmodifiersData,
  PmodifiersQuery,
  PmodifiersService
} from './services/pmodifiers/pmodifiers'
export type { Pmodifiers, PmodifiersData, PmodifiersQuery }

import type { Broles, BrolesData, BrolesQuery, BrolesService } from './services/broles/broles'
export type { Broles, BrolesData, BrolesQuery }

import type { Products, ProductsData, ProductsQuery, ProductsService } from './services/products/products'
export type { Products, ProductsData, ProductsQuery }

import type {
  ProductCategory,
  ProductCategoryData,
  ProductCategoryQuery,
  ProductCategoryService
} from './services/pcategories/pcategories'
export type { ProductCategory, ProductCategoryData, ProductCategoryQuery }

import type { Shop, ShopData, ShopQuery, ShopService } from './services/shops/shops'
export type { Shop, ShopData, ShopQuery }

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
const shopServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShopClientService = Pick<ShopService<Params<ShopQuery>>, typeof shopServiceMethods[number]>
const productCategoryServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ProductCategoryClientService = Pick<
  ProductCategoryService<Params<ProductCategoryQuery>>,
  typeof productCategoryServiceMethods[number]
>
const productsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ProductsClientService = Pick<
  ProductsService<Params<ProductsQuery>>,
  typeof productsServiceMethods[number]
>
const brolesServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type BrolesClientService = Pick<BrolesService<Params<BrolesQuery>>, typeof brolesServiceMethods[number]>
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
const ordersServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type OrdersClientService = Pick<OrdersService<Params<OrdersQuery>>, typeof ordersServiceMethods[number]>
const lineitemsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type LineitemsClientService = Pick<
  LineitemsService<Params<LineitemsQuery>>,
  typeof lineitemsServiceMethods[number]
>

export interface ServiceTypes {
  lineitems: LineitemsClientService
  orders: OrdersClientService
  poptions: PoptionsClientService
  pmodifiers: PmodifiersClientService
  broles: BrolesClientService
  products: ProductsClientService
  pcategories: ProductCategoryClientService
  shops: ShopClientService
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
  client.use('shops', connection.service('shops'), {
    methods: shopServiceMethods
  })
  client.use('pcategories', connection.service('pcategories'), {
    methods: productCategoryServiceMethods
  })
  client.use('products', connection.service('products'), {
    methods: productsServiceMethods
  })
  client.use('broles', connection.service('broles'), {
    methods: brolesServiceMethods
  })
  client.use('pmodifiers', connection.service('pmodifiers'), {
    methods: pmodifiersServiceMethods
  })
  client.use('poptions', connection.service('poptions'), {
    methods: poptionsServiceMethods
  })
  client.use('orders', connection.service('orders'), {
    methods: ordersServiceMethods
  })
  client.use('lineitems', connection.service('lineitems'), {
    methods: lineitemsServiceMethods
  })
  return client
}
