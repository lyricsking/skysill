import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Shops, ShopsData, ShopsQuery } from './shop.schema'

export interface ShopsParams extends KnexAdapterParams<ShopsQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ShopsService<ServiceParams extends Params = ShopsParams> extends KnexService<
  Shops,
  ShopsData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'shops'
  }
}
