import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Products, ProductsData, ProductsQuery } from './products.schema'

export interface ProductsParams extends KnexAdapterParams<ProductsQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ProductsService<ServiceParams extends Params = ProductsParams> extends KnexService<
  Products,
  ProductsData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'products'
  }
}
