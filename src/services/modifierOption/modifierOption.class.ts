// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  ModifierOption,
  ModifierOptionData,
  ModifierOptionPatch,
  ModifierOptionQuery
} from './modifierOption.schema'

export interface ModifierOptionParams extends KnexAdapterParams<ModifierOptionQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ModifierOptionService<ServiceParams extends Params = ModifierOptionParams> extends KnexService<
  ModifierOption,
  ModifierOptionData,
  ServiceParams,
  ModifierOptionPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'modifierOption'
  }
}
