import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Shop, ShopData, ShopQuery } from './shop.schema';
export interface ShopParams extends KnexAdapterParams<ShopQuery> {
}
export declare class ShopService<ServiceParams extends Params = ShopParams> extends KnexService<Shop, ShopData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
