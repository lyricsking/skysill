import type { Application } from '../../declarations';
import { OrderService } from './order.class';
export * from './order.class';
export * from './order.schema';
export declare const order: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        order: OrderService;
    }
}
