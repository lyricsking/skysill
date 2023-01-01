// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Params } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type {
  ShipdayDriver,
  ShipdayDriverData,
  ShipdayDriverQuery,
  ShipdayDriverService
} from './services/shipdayDriver/shipdayDriver'
export type { ShipdayDriver, ShipdayDriverData, ShipdayDriverQuery }

import type {
  ShipdayOrder,
  ShipdayOrderData,
  ShipdayOrderQuery,
  ShipdayOrderService
} from './services/shipdayOrder/shipdayOrder'
export type { ShipdayOrder, ShipdayOrderData, ShipdayOrderQuery }

import type {
  ShipdayOrder,
  ShipdayOrderData,
  ShipdayOrderQuery,
  ShipdayOrderService
} from './services/shipdayOrder/shipdayOrder'
export type { ShipdayOrder, ShipdayOrderData, ShipdayOrderQuery }

import type {
  ShipdayOrder,
  ShipdayOrderData,
  ShipdayOrderQuery,
  ShipdayOrderService
} from './services/shipdayOrder/shipdayOrder'
export type { ShipdayOrder, ShipdayOrderData, ShipdayOrderQuery }

import type {
  ShipdayOrder,
  ShipdayOrderData,
  ShipdayOrderQuery,
  ShipdayOrderService
} from './services/shipdayOrder/shipdayOrder'
export type { ShipdayOrder, ShipdayOrderData, ShipdayOrderQuery }

import type {
  ShipdayDriver,
  ShipdayDriverData,
  ShipdayDriverQuery,
  ShipdayDriverService
} from './services/shipdayDriver/shipdayDriver'
export type { ShipdayDriver, ShipdayDriverData, ShipdayDriverQuery }

import type {
  ProductModifier,
  ProductModifierData,
  ProductModifierQuery,
  ProductModifierService
} from './services/productModifier/productModifier'
export type { ProductModifier, ProductModifierData, ProductModifierQuery }

import type {
  ProductCategory,
  ProductCategoryData,
  ProductCategoryQuery,
  ProductCategoryService
} from './services/productCategory/productCategory'
export type { ProductCategory, ProductCategoryData, ProductCategoryQuery }

import type { Product, ProductData, ProductQuery, ProductService } from './services/product/product'
export type { Product, ProductData, ProductQuery }

import type {
  ModifierOption,
  ModifierOptionData,
  ModifierOptionQuery,
  ModifierOptionService
} from './services/modifierOption/modifierOption'
export type { ModifierOption, ModifierOptionData, ModifierOptionQuery }

import type { Modifier, ModifierData, ModifierQuery, ModifierService } from './services/modifier/modifier'
export type { Modifier, ModifierData, ModifierQuery }

import type {
  EmployeeRole,
  EmployeeRoleData,
  EmployeeRoleQuery,
  EmployeeRoleService
} from './services/employeeRole/employeeRole'
export type { EmployeeRole, EmployeeRoleData, EmployeeRoleQuery }

import type {
  EmployeeRole,
  EmployeeRoleData,
  EmployeeRoleQuery,
  EmployeeRoleService
} from './services/employee-role/employee-role'
export type { EmployeeRole, EmployeeRoleData, EmployeeRoleQuery }

import type { Driver, DriverData, DriverQuery, DriverService } from './services/driver/driver'
export type { Driver, DriverData, DriverQuery }

import type { Business, BusinessData, BusinessQuery, BusinessService } from './services/business/business'
export type { Business, BusinessData, BusinessQuery }

import type { Shop, ShopData, ShopQuery, ShopService } from './services/shop/shop'
export type { Shop, ShopData, ShopQuery }

import type { Lineitem, LineitemData, LineitemQuery, LineitemService } from './services/lineitem/lineitem'
export type { Lineitem, LineitemData, LineitemQuery }

import type { Order, OrderData, OrderQuery, OrderService } from './services/order/order'
export type { Order, OrderData, OrderQuery }

import type { Wallet, WalletData, WalletQuery, WalletService } from './services/wallet/wallet'
export type { Wallet, WalletData, WalletQuery }

import type { User, UserData, UserQuery, UserService } from './services/user/user'
export type { User, UserData, UserQuery }

import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

const userServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type UserClientService = Pick<UserService<Params<UserQuery>>, typeof userServiceMethods[number]>

const walletServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type WalletClientService = Pick<WalletService<Params<WalletQuery>>, typeof walletServiceMethods[number]>

const orderServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type OrderClientService = Pick<OrderService<Params<OrderQuery>>, typeof orderServiceMethods[number]>

const lineitemServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type LineitemClientService = Pick<
  LineitemService<Params<LineitemQuery>>,
  typeof lineitemServiceMethods[number]
>

const shopServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShopClientService = Pick<ShopService<Params<ShopQuery>>, typeof shopServiceMethods[number]>

const businessServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type BusinessClientService = Pick<
  BusinessService<Params<BusinessQuery>>,
  typeof businessServiceMethods[number]
>

const driverServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type DriverClientService = Pick<DriverService<Params<DriverQuery>>, typeof driverServiceMethods[number]>

const employeeRoleServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type EmployeeRoleClientService = Pick<
  EmployeeRoleService<Params<EmployeeRoleQuery>>,
  typeof employeeRoleServiceMethods[number]
>

const employeeRoleServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type EmployeeRoleClientService = Pick<
  EmployeeRoleService<Params<EmployeeRoleQuery>>,
  typeof employeeRoleServiceMethods[number]
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

const productCategoryServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ProductCategoryClientService = Pick<
  ProductCategoryService<Params<ProductCategoryQuery>>,
  typeof productCategoryServiceMethods[number]
>

const productModifierServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ProductModifierClientService = Pick<
  ProductModifierService<Params<ProductModifierQuery>>,
  typeof productModifierServiceMethods[number]
>

const shipdayDriverServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShipdayDriverClientService = Pick<
  ShipdayDriverService<Params<ShipdayDriverQuery>>,
  typeof shipdayDriverServiceMethods[number]
>

const shipdayOrderServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShipdayOrderClientService = Pick<
  ShipdayOrderService<Params<ShipdayOrderQuery>>,
  typeof shipdayOrderServiceMethods[number]
>

const shipdayOrderServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShipdayOrderClientService = Pick<ShipdayOrderService, typeof shipdayOrderServiceMethods[number]>

const shipdayOrderServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShipdayOrderClientService = Pick<ShipdayOrderService, typeof shipdayOrderServiceMethods[number]>

const shipdayOrderServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShipdayOrderClientService = Pick<ShipdayOrderService, typeof shipdayOrderServiceMethods[number]>

const shipdayDriverServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type ShipdayDriverClientService = Pick<ShipdayDriverService, typeof shipdayDriverServiceMethods[number]>

export interface ServiceTypes {
  shipdayDriver: ShipdayDriverClientService
  shipdayOrder: ShipdayOrderClientService
  shipdayOrder: ShipdayOrderClientService
  shipdayOrder: ShipdayOrderClientService
  shipdayOrder: ShipdayOrderClientService
  shipdayDriver: ShipdayDriverClientService
  productModifier: ProductModifierClientService
  productCategory: ProductCategoryClientService
  product: ProductClientService
  modifierOption: ModifierOptionClientService
  modifier: ModifierClientService
  employeeRole: EmployeeRoleClientService
  'employee-role': EmployeeRoleClientService
  driver: DriverClientService
  business: BusinessClientService
  shop: ShopClientService
  lineitem: LineitemClientService
  order: OrderClientService
  wallet: WalletClientService
  users: UserClientService
  //
}

/**
 * Returns a typed client for the skysill app.
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

  client.use('users', connection.service('users'), {
    methods: userServiceMethods
  })
  client.use('wallet', connection.service('wallet'), {
    methods: walletServiceMethods
  })
  client.use('order', connection.service('order'), {
    methods: orderServiceMethods
  })
  client.use('lineitem', connection.service('lineitem'), {
    methods: lineitemServiceMethods
  })
  client.use('shop', connection.service('shop'), {
    methods: shopServiceMethods
  })
  client.use('shop', connection.service('shop'), {
    methods: shopServiceMethods
  })
  client.use('shop', connection.service('shop'), {
    methods: shopServiceMethods
  })
  client.use('shop', connection.service('shop'), {
    methods: shopServiceMethods
  })
  client.use('business', connection.service('business'), {
    methods: businessServiceMethods
  })
  client.use('driver', connection.service('driver'), {
    methods: driverServiceMethods
  })
  client.use('employee-role', connection.service('employee-role'), {
    methods: employeeRoleServiceMethods
  })
  client.use('employeeRole', connection.service('employeeRole'), {
    methods: employeeRoleServiceMethods
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
  client.use('productCategory', connection.service('productCategory'), {
    methods: productCategoryServiceMethods
  })
  client.use('productModifier', connection.service('productModifier'), {
    methods: productModifierServiceMethods
  })
  client.use('shipdayDriver', connection.service('shipdayDriver'), {
    methods: shipdayDriverServiceMethods
  })
  client.use('shipdayOrder', connection.service('shipdayOrder'), {
    methods: shipdayOrderServiceMethods
  })
  client.use('shipdayOrder', connection.service('shipdayOrder'), {
    methods: shipdayOrderServiceMethods
  })
  client.use('shipdayOrder', connection.service('shipdayOrder'), {
    methods: shipdayOrderServiceMethods
  })
  client.use('shipdayOrder', connection.service('shipdayOrder'), {
    methods: shipdayOrderServiceMethods
  })
  client.use('shipdayDriver', connection.service('shipdayDriver'), {
    methods: shipdayDriverServiceMethods
  })
  return client
}
