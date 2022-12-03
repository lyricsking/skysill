import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Driver, DriverData, DriverQuery } from './driver.schema'

export interface DriverParams extends KnexAdapterParams<DriverQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class DriverService<ServiceParams extends Params = DriverParams> extends KnexService<
  Driver,
  DriverData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'drivers'
  }
}
