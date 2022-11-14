import type { Application } from '../../declarations';
import { ShopsService } from './shops.class';
export * from './shops.class';
export * from './shops.schema';
export declare const shops: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        shops: ShopsService;
    }
}
