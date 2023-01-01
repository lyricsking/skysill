// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  ProductCategory,
  ProductCategoryData,
  ProductCategoryPatch,
  ProductCategoryQuery
} from './productCategory.schema'

export interface ProductCategoryParams extends KnexAdapterParams<ProductCategoryQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ProductCategoryService<ServiceParams extends Params = ProductCategoryParams> extends KnexService<
  ProductCategory,
  ProductCategoryData,
  ServiceParams,
  ProductCategoryPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'productCategory'
  }
}
