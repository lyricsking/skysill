import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Order, OrderData, OrderQuery } from './order.schema'

export interface OrderParams extends KnexAdapterParams<OrderQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class OrderService<ServiceParams extends Params = OrderParams> extends KnexService<
  Order,
  OrderData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'order'
  }
}
