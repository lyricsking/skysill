import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { ModifierOption, ModifierOptionData, ModifierOptionQuery } from './modifier_option.schema';
export interface ModifierOptionParams extends KnexAdapterParams<ModifierOptionQuery> {
}
export declare class ModifierOptionService<ServiceParams extends Params = ModifierOptionParams> extends KnexService<ModifierOption, ModifierOptionData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
