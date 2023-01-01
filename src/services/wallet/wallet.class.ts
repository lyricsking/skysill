// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Wallet, WalletData, WalletPatch, WalletQuery } from './wallet.schema'

export interface WalletParams extends KnexAdapterParams<WalletQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class WalletService<ServiceParams extends Params = WalletParams> extends KnexService<
  Wallet,
  WalletData,
  ServiceParams,
  WalletPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'wallet'
  }
}
