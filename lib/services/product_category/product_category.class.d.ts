import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { ProductCategory, ProductCategoryData, ProductCategoryQuery } from './product_category.schema';
export interface ProductCategoryParams extends KnexAdapterParams<ProductCategoryQuery> {
}
export declare class ProductCategoryService<ServiceParams extends Params = ProductCategoryParams> extends KnexService<ProductCategory, ProductCategoryData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
