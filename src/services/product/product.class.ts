import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Product, ProductData, ProductQuery } from './product.schema'

export interface ProductParams extends KnexAdapterParams<ProductQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ProductService<ServiceParams extends Params = ProductParams> extends KnexService<
  Product,
  ProductData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'product'
  }
}