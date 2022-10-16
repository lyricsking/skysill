import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Lineitems, LineitemsData, LineitemsQuery } from './lineitems.schema'

export interface LineitemsParams extends KnexAdapterParams<LineitemsQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class LineitemsService<ServiceParams extends Params = LineitemsParams> extends KnexService<
  Lineitems,
  LineitemsData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'lineitems'
  }
}
