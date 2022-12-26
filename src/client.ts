import { feathers } from '@feathersjs/feathers'

import type {
  ShipdayDriver,
  ShipdayDriverData,
  ShipdayDriverQuery,
  ShipdayDriverService
} from './services/shipday-driver/shipday-driver'
export type { ShipdayDriver, ShipdayDriverData, ShipdayDriverQuery }

import type {
  ShipdayOrder,
  ShipdayOrderData,
  ShipdayOrderQuery,
  ShipdayOrderService
} from './services/shipday-order/shipday-order'
export type { ShipdayOrder, ShipdayOrderData, ShipdayOrderQuery }

import type {
  ProductModifier,
  ProductModifierData,
  ProductModifierQuery,
  ProductModifierService
} from './services/product_modifier/product_modifier'
export type { ProductModifier, ProductModifierData, ProductModifierQuery }

import type { Twilio, TwilioData, TwilioQuery, TwilioService } from './services/twilio/twilio'
export type { Twilio, TwilioData, TwilioQuery }

import type { Driver, DriverData, DriverQuery, DriverService } from './services/driver/driver'
export type { Driver, DriverData, DriverQuery }

import type {
  Transaction,
  TransactionData,
  TransactionQuery,
  TransactionService
} from './services/transaction/transaction'
export type { Transaction, TransactionData, TransactionQuery }

import type { Wallet, WalletData, WalletQuery, WalletService } from './services/wallet/wallet'
export type { Wallet, WalletData, WalletQuery }

import type { Shop, ShopData, ShopQuery, ShopService } from './services/shop/shop'
export type { Shop, ShopData, ShopQuery }

import type { Product, ProductData, ProductQuery, ProductService } from './services/product/product'
export type { Product, ProductData, ProductQuery }

import type {
  ModifierOption,
  ModifierOptionData,
  ModifierOptionQuery,
  ModifierOptionService
} from './services/modifier_option/modifier_option'
export type { ModifierOption, ModifierOptionData, ModifierOptionQuery }

import type { Modifier, ModifierData, ModifierQuery, ModifierService } from './services/modifier/modifier'
export type { Modifier, ModifierData, ModifierQuery }

import type {
  ProductCategory,
  ProductCategoryData,
  ProductCategoryQuery,
  ProductCategoryService
} from './services/product_category/product_category'
export type { ProductCategory, ProductCategoryData, ProductCategoryQuery }

import type { Order, OrderData, OrderQuery, OrderService } from './services/order/order'
export type { Order, OrderData, OrderQuery }

import type { Lineitem, LineitemData, LineitemQuery, LineitemService } from './services/lineitem/lineitem'
export type { Lineitem, LineitemData, LineitemQuery }

import type { Business, BusinessData, BusinessQuery, BusinessService } from './services/business/business'
export type { Business, BusinessData, BusinessQuery }

import type {
  EmployeeRole,
  EmployeeRoleData,
  EmployeeRoleQuery,
  EmployeeRoleService
} from './services/employee_role/employee_role'
export type { EmployeeRole, EmployeeRoleData, EmployeeRoleQuery }

import type { AuthenticationService } from '@feathersjs/authentication'

import type { User, UserData, UserQuery, UserService } from './services/user/user'
export type { User, UserData, UserQuery }

import type { TransportConnection, Params } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';

const userServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type UserClientService = Pick<UserService<Params<UserQuery>>, typeof userServiceMethods[number]>
const employeeRoleServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type EmployeeRoleClientService = Pick<
  EmployeeRoleService<Params<EmployeeRoleQuery>>,
  typeof employeeRoleServiceMethods[number]
>
const businessServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type BusinessClientService = Pick<
  BusinessService<Params<BusinessQuery>>,
  typeof businessServiceMethods[number]
>
const lineItemServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type LineitemClientService = Pick<
  LineitemService<Params<LineitemQuery>>,
  typeof lineItemServiceMethods[number]
>
const orderServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type OrderClientService = Pick<OrderService<Params<OrderQuery>>, typeof orderServiceMethods[number]>
const productCategoryServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ProductCategoryClientService = Pick<
  ProductCategoryService<Params<ProductCategoryQuery>>,
  typeof productCategoryServiceMethods[number]
>
const modifierServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ModifierClientService = Pick<
  ModifierService<Params<ModifierQuery>>,
  typeof modifierServiceMethods[number]
>
const modifierOptionServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ModifierOptionClientService = Pick<
  ModifierOptionService<Params<ModifierOptionQuery>>,
  typeof modifierOptionServiceMethods[number]
>
const productServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ProductClientService = Pick<ProductService<Params<ProductQuery>>, typeof productServiceMethods[number]>
const shopServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShopClientService = Pick<ShopService<Params<ShopQuery>>, typeof shopServiceMethods[number]>
const walletServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type WalletClientService = Pick<WalletService<Params<WalletQuery>>, typeof walletServiceMethods[number]>
const transactionsServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type TransactionClientService = Pick<
  TransactionService<Params<TransactionQuery>>,
  typeof transactionsServiceMethods[number]
>
const driverServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type DriverClientService = Pick<DriverService<Params<DriverQuery>>, typeof driverServiceMethods[number]>
const twilioServiceMethods = ['sendVerification', 'verify'] as const
type TwilioClientService = Pick<TwilioService, typeof twilioServiceMethods[number]>
const productModifierServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ProductModifierClientService = Pick<
  ProductModifierService<Params<ProductModifierQuery>>,
  typeof productModifierServiceMethods[number]
>
const shipdayOrderServiceMethods = ['find', 'get', 'create', 'patch', 'remove'] as const
type ShipdayOrderClientService = Pick<ShipdayOrderService, typeof shipdayOrderServiceMethods[number]>
const shipdayDriverServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShipdayDriverClientService = Pick<ShipdayDriverService, typeof shipdayDriverServiceMethods[number]>
const deliveryInfoServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const

export interface ServiceTypes {
  'shipday-driver': ShipdayDriverClientService
  'shipday-order': ShipdayOrderClientService
  productModifier: ProductModifierClientService
  twilio: TwilioClientService
  driver: DriverClientService
  transaction: TransactionClientService
  wallet: WalletClientService
  shop: ShopClientService
  product: ProductClientService
  modifierOption: ModifierOptionClientService
  modifier: ModifierClientService
  productCategory: ProductCategoryClientService
  order: OrderClientService
  lineitem: LineitemClientService
  business: BusinessClientService
  employeeRole: EmployeeRoleClientService
  authentication: Pick<AuthenticationService, 'create' | 'remove'>
  user: UserClientService
  //
}

/**
 * Returns a typed client  app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {}
  ) => {
  const client = feathers<ServiceTypes, Configuration>()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))

  client.use('user', connection.service('user'), {
    methods: userServiceMethods
  })
  client.use('employeeRole', connection.service('employeeRole'), {
    methods: employeeRoleServiceMethods
  })
  client.use('business', connection.service('business'), {
    methods: businessServiceMethods
  })
  client.use('lineitem', connection.service('lineitem'), {
    methods: lineItemServiceMethods
  })
  client.use('order', connection.service('order'), {
    methods: orderServiceMethods
  })
  client.use('productCategory', connection.service('productCategory'), {
    methods: productCategoryServiceMethods
  })
  client.use('modifier', connection.service('modifier'), {
    methods: modifierServiceMethods
  })
  client.use('modifierOption', connection.service('modifierOption'), {
    methods: modifierOptionServiceMethods
  })
  client.use('product', connection.service('product'), {
    methods: productServiceMethods
  })
  client.use('shop', connection.service('shop'), {
    methods: shopServiceMethods
  })
  client.use('wallet', connection.service('wallet'), {
    methods: walletServiceMethods
  })
  client.use('transaction', connection.service('transaction'), {
    methods: transactionsServiceMethods
  })
  client.use('driver', connection.service('driver'), {
    methods: driverServiceMethods
  })
  client.use('twilio', connection.service('twilio'), {
    methods: twilioServiceMethods
  })
  client.use('productModifier', connection.service('productModifier'), {
    methods: productModifierServiceMethods
  })
  client.use('shipday-order', connection.service('shipday-order'), {
    methods: shipdayOrderServiceMethods
  })
  client.use('shipday-driver', connection.service('shipday-driver'), {
    methods: shipdayDriverServiceMethods
  })
  return client
}
