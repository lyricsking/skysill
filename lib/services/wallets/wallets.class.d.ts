import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Wallets, WalletsData, WalletsQuery } from './wallets.schema';
export interface WalletsParams extends KnexAdapterParams<WalletsQuery> {
}
export declare class WalletsService<ServiceParams extends Params = WalletsParams> extends KnexService<Wallets, WalletsData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
