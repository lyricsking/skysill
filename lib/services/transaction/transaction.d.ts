import type { Application } from '../../declarations';
import { TransactionService } from './transaction.class';
export * from './transaction.class';
export * from './transaction.schema';
export declare const transaction: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        transaction: TransactionService;
    }
}
