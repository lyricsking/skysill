import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Pcategories, PcategoriesData, PcategoriesQuery } from './pcategories.schema'

export interface PcategoriesParams extends KnexAdapterParams<PcategoriesQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class PcategoriesService<ServiceParams extends Params = PcategoriesParams> extends KnexService<
  Pcategories,
  PcategoriesData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'pcategories'
  }
}
