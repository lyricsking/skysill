import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { ProductModifier, ProductModifierData, ProductModifierQuery } from './product_modifier.schema'

export interface ProductModifierParams extends KnexAdapterParams<ProductModifierQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ProductModifierService<ServiceParams extends Params = ProductModifierParams> extends KnexService<
  ProductModifier,
  ProductModifierData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    id: 'productId',
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'product_modifier'
  }
}
