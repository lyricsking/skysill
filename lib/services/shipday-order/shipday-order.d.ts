import type { Application } from '../../declarations';
import { ShipdayOrderService } from './shipday-order.class';
export * from './shipday-order.class';
export * from './shipday-order.schema';
export declare const shipdayOrder: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        'shipday-order': ShipdayOrderService;
    }
}
