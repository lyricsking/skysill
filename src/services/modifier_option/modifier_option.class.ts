import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { ModifierOption, ModifierOptionData, ModifierOptionQuery } from './modifier_option.schema'

export interface ModifierOptionParams extends KnexAdapterParams<ModifierOptionQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ModifierOptionService<ServiceParams extends Params = ModifierOptionParams> extends KnexService<
  ModifierOption,
  ModifierOptionData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'modifier_option'
  }
}
