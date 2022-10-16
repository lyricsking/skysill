import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { ProductCategory, ProductCategoryData, ProductCategoryQuery } from './pcategories.schema'

export interface ProductCategoryParams extends KnexAdapterParams<ProductCategoryQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ProductCategoryService<ServiceParams extends Params = ProductCategoryParams> extends KnexService<
  ProductCategory,
  ProductCategoryData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'pcategories'
  }
}
