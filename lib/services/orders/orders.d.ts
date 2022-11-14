import type { Application } from '../../declarations';
import { OrdersService } from './orders.class';
export * from './orders.class';
export * from './orders.schema';
export declare const orders: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        orders: OrdersService;
    }
}
