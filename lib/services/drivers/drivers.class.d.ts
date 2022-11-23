import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Drivers, DriversData, DriversQuery } from './drivers.schema';
export interface DriversParams extends KnexAdapterParams<DriversQuery> {
}
export declare class DriversService<ServiceParams extends Params = DriversParams> extends KnexService<Drivers, DriversData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
