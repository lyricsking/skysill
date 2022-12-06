import type { Application } from '../../declarations';
import { ProductModifierService } from './product_modifier.class';
export * from './product_modifier.class';
export * from './product_modifier.schema';
export declare const productModifier: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        productModifier: ProductModifierService;
    }
}
