import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Orders, OrdersData, OrdersQuery } from './order.schema'

export interface OrdersParams extends KnexAdapterParams<OrdersQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class OrdersService<ServiceParams extends Params = OrdersParams> extends KnexService<
  Orders,
  OrdersData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'orders'
  }
}
