import type { Application } from '../../declarations';
import { ProductCategoryService } from './product_category.class';
export * from './product_category.class';
export * from './product_category.schema';
export declare const productCategory: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        productCategory: ProductCategoryService;
    }
}
