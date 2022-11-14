import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Pmodifiers, PmodifiersData, PmodifiersQuery } from './pmodifiers.schema';
export interface PmodifiersParams extends KnexAdapterParams<PmodifiersQuery> {
}
export declare class PmodifiersService<ServiceParams extends Params = PmodifiersParams> extends KnexService<Pmodifiers, PmodifiersData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
