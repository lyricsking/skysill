// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Modifier, ModifierData, ModifierPatch, ModifierQuery } from './modifier.schema'

export interface ModifierParams extends KnexAdapterParams<ModifierQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ModifierService<ServiceParams extends Params = ModifierParams> extends KnexService<
  Modifier,
  ModifierData,
  ServiceParams,
  ModifierPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'modifier'
  }
}
