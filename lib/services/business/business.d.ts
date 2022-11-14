import type { Application } from '../../declarations';
import { BusinessService } from './business.class';
export * from './business.class';
export * from './business.schema';
export declare const business: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        business: BusinessService;
    }
}
