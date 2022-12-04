import type { Application } from '../../declarations';
import { ShopService } from './shop.class';
export * from './shop.class';
export * from './shop.schema';
export declare const shop: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        shop: ShopService;
    }
}
