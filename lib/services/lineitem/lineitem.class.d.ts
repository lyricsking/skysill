import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Lineitem, LineitemData, LineitemQuery } from './lineitem.schema';
export interface LineitemParams extends KnexAdapterParams<LineitemQuery> {
}
export declare class LineitemService<ServiceParams extends Params = LineitemParams> extends KnexService<Lineitem, LineitemData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
