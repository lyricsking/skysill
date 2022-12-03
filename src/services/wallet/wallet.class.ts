import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Wallet, WalletData, WalletQuery } from './wallet.schema'

export interface WalletParams extends KnexAdapterParams<WalletQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class WalletService<ServiceParams extends Params = WalletParams> extends KnexService<
  Wallet,
  WalletData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'wallet'
  }
}
