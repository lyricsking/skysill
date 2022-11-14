import type { Application } from '../../declarations';
import { PcategoriesService } from './pcategories.class';
export * from './pcategories.class';
export * from './pcategories.schema';
export declare const pcategories: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        pcategories: PcategoriesService;
    }
}
