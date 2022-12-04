import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Product, ProductData, ProductQuery } from './product.schema';
export interface ProductParams extends KnexAdapterParams<ProductQuery> {
}
export declare class ProductService<ServiceParams extends Params = ProductParams> extends KnexService<Product, ProductData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
