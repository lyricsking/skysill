import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Pmodifiers, PmodifiersData, PmodifiersQuery } from './modifier.schema'

export interface PmodifiersParams extends KnexAdapterParams<PmodifiersQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class PmodifiersService<ServiceParams extends Params = PmodifiersParams> extends KnexService<
  Pmodifiers,
  PmodifiersData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'pmodifiers'
  }
}
