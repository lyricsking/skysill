import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Business, BusinessData, BusinessQuery } from './business.schema'

export interface BusinessParams extends KnexAdapterParams<BusinessQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class BusinessService<ServiceParams extends Params = BusinessParams> extends KnexService<
  Business,
  BusinessData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'business'
  }
}
