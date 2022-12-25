import type { Shipday, ShipdayData, ShipdayQuery, ShipdayService } from './services/shipday/shipday';
export type { Shipday, ShipdayData, ShipdayQuery };
import type { ProductModifier, ProductModifierData, ProductModifierQuery, ProductModifierService } from './services/product_modifier/product_modifier';
export type { ProductModifier, ProductModifierData, ProductModifierQuery };
import type { Twilio, TwilioData, TwilioQuery, TwilioService } from './services/twilio/twilio';
export type { Twilio, TwilioData, TwilioQuery };
import type { Driver, DriverData, DriverQuery, DriverService } from './services/driver/driver';
export type { Driver, DriverData, DriverQuery };
import type { Transaction, TransactionData, TransactionQuery, TransactionService } from './services/transaction/transaction';
export type { Transaction, TransactionData, TransactionQuery };
import type { Wallet, WalletData, WalletQuery, WalletService } from './services/wallet/wallet';
export type { Wallet, WalletData, WalletQuery };
import type { Shop, ShopData, ShopQuery, ShopService } from './services/shop/shop';
export type { Shop, ShopData, ShopQuery };
import type { Product, ProductData, ProductQuery, ProductService } from './services/product/product';
export type { Product, ProductData, ProductQuery };
import type { ModifierOption, ModifierOptionData, ModifierOptionQuery, ModifierOptionService } from './services/modifier_option/modifier_option';
export type { ModifierOption, ModifierOptionData, ModifierOptionQuery };
import type { Modifier, ModifierData, ModifierQuery, ModifierService } from './services/modifier/modifier';
export type { Modifier, ModifierData, ModifierQuery };
import type { ProductCategory, ProductCategoryData, ProductCategoryQuery, ProductCategoryService } from './services/product_category/product_category';
export type { ProductCategory, ProductCategoryData, ProductCategoryQuery };
import type { Order, OrderData, OrderQuery, OrderService } from './services/order/order';
export type { Order, OrderData, OrderQuery };
import type { Lineitem, LineitemData, LineitemQuery, LineitemService } from './services/lineitem/lineitem';
export type { Lineitem, LineitemData, LineitemQuery };
import type { Business, BusinessData, BusinessQuery, BusinessService } from './services/business/business';
export type { Business, BusinessData, BusinessQuery };
import type { EmployeeRole, EmployeeRoleData, EmployeeRoleQuery, EmployeeRoleService } from './services/employee_role/employee_role';
export type { EmployeeRole, EmployeeRoleData, EmployeeRoleQuery };
import type { AuthenticationService } from '@feathersjs/authentication';
import type { User, UserData, UserQuery, UserService } from './services/user/user';
export type { User, UserData, UserQuery };
import type { TransportConnection, Params } from '@feathersjs/feathers';
declare const userServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type UserClientService = Pick<UserService<Params<UserQuery>>, typeof userServiceMethods[number]>;
declare const employeeRoleServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type EmployeeRoleClientService = Pick<EmployeeRoleService<Params<EmployeeRoleQuery>>, typeof employeeRoleServiceMethods[number]>;
declare const businessServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type BusinessClientService = Pick<BusinessService<Params<BusinessQuery>>, typeof businessServiceMethods[number]>;
declare const lineItemServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type LineitemClientService = Pick<LineitemService<Params<LineitemQuery>>, typeof lineItemServiceMethods[number]>;
declare const orderServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type OrderClientService = Pick<OrderService<Params<OrderQuery>>, typeof orderServiceMethods[number]>;
declare const productCategoryServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type ProductCategoryClientService = Pick<ProductCategoryService<Params<ProductCategoryQuery>>, typeof productCategoryServiceMethods[number]>;
declare const modifierServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type ModifierClientService = Pick<ModifierService<Params<ModifierQuery>>, typeof modifierServiceMethods[number]>;
declare const modifierOptionServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type ModifierOptionClientService = Pick<ModifierOptionService<Params<ModifierOptionQuery>>, typeof modifierOptionServiceMethods[number]>;
declare const productServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type ProductClientService = Pick<ProductService<Params<ProductQuery>>, typeof productServiceMethods[number]>;
declare const shopServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type ShopClientService = Pick<ShopService<Params<ShopQuery>>, typeof shopServiceMethods[number]>;
declare const walletServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type WalletClientService = Pick<WalletService<Params<WalletQuery>>, typeof walletServiceMethods[number]>;
declare const transactionsServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type TransactionClientService = Pick<TransactionService<Params<TransactionQuery>>, typeof transactionsServiceMethods[number]>;
declare const driverServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type DriverClientService = Pick<DriverService<Params<DriverQuery>>, typeof driverServiceMethods[number]>;
declare const twilioServiceMethods: readonly ["sendVerification", "verify"];
type TwilioClientService = Pick<TwilioService, typeof twilioServiceMethods[number]>;
declare const productModifierServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type ProductModifierClientService = Pick<ProductModifierService<Params<ProductModifierQuery>>, typeof productModifierServiceMethods[number]>;
declare const shipdayServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type ShipdayClientService = Pick<ShipdayService, typeof shipdayServiceMethods[number]>;
export interface ServiceTypes {
    shipday: ShipdayClientService;
    productModifier: ProductModifierClientService;
    twilio: TwilioClientService;
    driver: DriverClientService;
    transaction: TransactionClientService;
    wallet: WalletClientService;
    shop: ShopClientService;
    product: ProductClientService;
    modifierOption: ModifierOptionClientService;
    modifier: ModifierClientService;
    productCategory: ProductCategoryClientService;
    order: OrderClientService;
    lineitem: LineitemClientService;
    business: BusinessClientService;
    employeeRole: EmployeeRoleClientService;
    authentication: Pick<AuthenticationService, 'create' | 'remove'>;
    user: UserClientService;
}
export declare const createClient: <Configuration = any>(connection: TransportConnection<ServiceTypes>) => import("@feathersjs/feathers").Application<ServiceTypes, Configuration>;
