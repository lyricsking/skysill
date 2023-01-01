import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Order, OrderData, OrderPatch, OrderQuery } from './order.schema';
export interface OrderParams extends KnexAdapterParams<OrderQuery> {
}
export declare class OrderService<ServiceParams extends Params = OrderParams> extends KnexService<Order, OrderData, ServiceParams, OrderPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
