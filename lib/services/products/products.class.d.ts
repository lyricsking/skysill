import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Products, ProductsData, ProductsQuery } from './products.schema';
export interface ProductsParams extends KnexAdapterParams<ProductsQuery> {
}
export declare class ProductsService<ServiceParams extends Params = ProductsParams> extends KnexService<Products, ProductsData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
