import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Shop, ShopData, ShopQuery } from './shops.schema'

export interface ShopParams extends KnexAdapterParams<ShopQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ShopService<ServiceParams extends Params = ShopParams> extends KnexService<
  Shop,
  ShopData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'shops'
  }
}
