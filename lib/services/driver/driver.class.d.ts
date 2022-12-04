import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Driver, DriverData, DriverQuery } from './driver.schema';
export interface DriverParams extends KnexAdapterParams<DriverQuery> {
}
export declare class DriverService<ServiceParams extends Params = DriverParams> extends KnexService<Driver, DriverData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
