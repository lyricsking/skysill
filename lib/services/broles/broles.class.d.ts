import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Broles, BrolesData, BrolesQuery } from './broles.schema';
export interface BrolesParams extends KnexAdapterParams<BrolesQuery> {
}
export declare class BrolesService<ServiceParams extends Params = BrolesParams> extends KnexService<Broles, BrolesData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
