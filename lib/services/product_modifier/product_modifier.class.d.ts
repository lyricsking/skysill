import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { ProductModifier, ProductModifierData, ProductModifierQuery } from './product_modifier.schema';
export interface ProductModifierParams extends KnexAdapterParams<ProductModifierQuery> {
}
export declare class ProductModifierService<ServiceParams extends Params = ProductModifierParams> extends KnexService<ProductModifier, ProductModifierData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
