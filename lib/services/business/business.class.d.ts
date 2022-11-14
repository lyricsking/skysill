import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Business, BusinessData, BusinessQuery } from './business.schema';
export interface BusinessParams extends KnexAdapterParams<BusinessQuery> {
}
export declare class BusinessService<ServiceParams extends Params = BusinessParams> extends KnexService<Business, BusinessData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
