import type { Application } from '../../declarations';
import { ProductsService } from './products.class';
export * from './products.class';
export * from './products.schema';
export declare const products: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        products: ProductsService;
    }
}
