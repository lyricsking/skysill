// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Lineitem, LineitemData, LineitemPatch, LineitemQuery } from './lineitem.schema'

export interface LineitemParams extends KnexAdapterParams<LineitemQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class LineitemService<ServiceParams extends Params = LineitemParams> extends KnexService<
  Lineitem,
  LineitemData,
  ServiceParams,
  LineitemPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'lineitem'
  }
}
