import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Transactions, TransactionsData, TransactionsQuery } from './transaction.schema'

export interface TransactionsParams extends KnexAdapterParams<TransactionsQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class TransactionsService<ServiceParams extends Params = TransactionsParams> extends KnexService<
  Transactions,
  TransactionsData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'transactions'
  }
}
