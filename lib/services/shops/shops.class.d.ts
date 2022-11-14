import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Shops, ShopsData, ShopsQuery } from './shops.schema';
export interface ShopsParams extends KnexAdapterParams<ShopsQuery> {
}
export declare class ShopsService<ServiceParams extends Params = ShopsParams> extends KnexService<Shops, ShopsData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
