import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Modifier, ModifierData, ModifierQuery } from './modifier.schema';
export interface ModifierParams extends KnexAdapterParams<ModifierQuery> {
}
export declare class ModifierService<ServiceParams extends Params = ModifierParams> extends KnexService<Modifier, ModifierData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
