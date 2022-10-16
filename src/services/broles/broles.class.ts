import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Broles, BrolesData, BrolesQuery } from './broles.schema'

export interface BrolesParams extends KnexAdapterParams<BrolesQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class BrolesService<ServiceParams extends Params = BrolesParams> extends KnexService<
  Broles,
  BrolesData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'broles'
  }
}
