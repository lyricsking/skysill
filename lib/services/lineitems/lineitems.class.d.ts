import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Lineitems, LineitemsData, LineitemsQuery } from './lineitems.schema';
export interface LineitemsParams extends KnexAdapterParams<LineitemsQuery> {
}
export declare class LineitemsService<ServiceParams extends Params = LineitemsParams> extends KnexService<Lineitems, LineitemsData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
