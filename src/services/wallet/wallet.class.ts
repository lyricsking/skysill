import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Wallets, WalletsData, WalletsQuery } from './wallet.schema'

export interface WalletsParams extends KnexAdapterParams<WalletsQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class WalletsService<ServiceParams extends Params = WalletsParams> extends KnexService<
  Wallets,
  WalletsData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'wallet'
  }
}
