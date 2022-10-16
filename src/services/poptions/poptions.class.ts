import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Poptions, PoptionsData, PoptionsQuery } from './poptions.schema'

export interface PoptionsParams extends KnexAdapterParams<PoptionsQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class PoptionsService<ServiceParams extends Params = PoptionsParams> extends KnexService<
  Poptions,
  PoptionsData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'poptions'
  }
}
