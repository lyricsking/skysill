import type { UsersData, UsersPatch, UsersResult, UsersQuery } from './services/users/users.schema';
export type { UsersData, UsersPatch, UsersResult, UsersQuery, };
import type { Paginated, ClientService, TransportConnection, Params } from '@feathersjs/feathers';
export interface ServiceTypes {
    'users': ClientService<UsersResult, UsersData, UsersPatch, Paginated<UsersResult>, Params<UsersQuery>>;
}
export declare const createClient: <Configuration = any>(connection: TransportConnection<ServiceTypes>) => import("@feathersjs/feathers").Application<ServiceTypes, Configuration>;
