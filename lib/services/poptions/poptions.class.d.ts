import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Poptions, PoptionsData, PoptionsQuery } from './poptions.schema';
export interface PoptionsParams extends KnexAdapterParams<PoptionsQuery> {
}
export declare class PoptionsService<ServiceParams extends Params = PoptionsParams> extends KnexService<Poptions, PoptionsData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
