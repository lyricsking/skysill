import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Transaction, TransactionData, TransactionQuery } from './transaction.schema'

export interface TransactionParams extends KnexAdapterParams<TransactionQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class TransactionService<ServiceParams extends Params = TransactionParams> extends KnexService<
  Transaction,
  TransactionData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'transaction'
  }
}
