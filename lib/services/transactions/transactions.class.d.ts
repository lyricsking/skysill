import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Transactions, TransactionsData, TransactionsQuery } from './transactions.schema';
export interface TransactionsParams extends KnexAdapterParams<TransactionsQuery> {
}
export declare class TransactionsService<ServiceParams extends Params = TransactionsParams> extends KnexService<Transactions, TransactionsData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
