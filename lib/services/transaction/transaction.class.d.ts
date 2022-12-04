import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Transaction, TransactionData, TransactionQuery } from './transaction.schema';
export interface TransactionParams extends KnexAdapterParams<TransactionQuery> {
}
export declare class TransactionService<ServiceParams extends Params = TransactionParams> extends KnexService<Transaction, TransactionData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
