import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Drivers, DriversData, DriversQuery } from './driver.schema'

export interface DriversParams extends KnexAdapterParams<DriversQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class DriversService<ServiceParams extends Params = DriversParams> extends KnexService<
  Drivers,
  DriversData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'drivers'
  }
}
