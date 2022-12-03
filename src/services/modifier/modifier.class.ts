import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Modifier, ModifierData, ModifierQuery } from './modifier.schema'

export interface ModifierParams extends KnexAdapterParams<ModifierQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ModifierService<ServiceParams extends Params = ModifierParams> extends KnexService<
  Modifier,
  ModifierData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'modifier'
  }
}
