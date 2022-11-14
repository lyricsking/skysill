import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Pcategories, PcategoriesData, PcategoriesQuery } from './pcategories.schema';
export interface PcategoriesParams extends KnexAdapterParams<PcategoriesQuery> {
}
export declare class PcategoriesService<ServiceParams extends Params = PcategoriesParams> extends KnexService<Pcategories, PcategoriesData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
