import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Wallet, WalletData, WalletQuery } from './wallet.schema';
export interface WalletParams extends KnexAdapterParams<WalletQuery> {
}
export declare class WalletService<ServiceParams extends Params = WalletParams> extends KnexService<Wallet, WalletData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
