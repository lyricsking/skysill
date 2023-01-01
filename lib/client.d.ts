import type { TransportConnection, Params } from '@feathersjs/feathers';
import type { Wallet, WalletData, WalletQuery, WalletService } from './services/wallet/wallet';
export type { Wallet, WalletData, WalletQuery };
import type { User, UserData, UserQuery, UserService } from './services/user/user';
export type { User, UserData, UserQuery };
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
declare const userServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type UserClientService = Pick<UserService<Params<UserQuery>>, typeof userServiceMethods[number]>;
declare const walletServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type WalletClientService = Pick<WalletService<Params<WalletQuery>>, typeof walletServiceMethods[number]>;
export interface ServiceTypes {
    wallet: WalletClientService;
    users: UserClientService;
}
/**
 * Returns a typed client for the skysill app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => import("@feathersjs/feathers").Application<ServiceTypes, Configuration>;
