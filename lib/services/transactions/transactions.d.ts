import type { Application } from '../../declarations';
import { TransactionsService } from './transactions.class';
export * from './transactions.class';
export * from './transactions.schema';
export declare const transactions: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        transactions: TransactionsService;
    }
}
