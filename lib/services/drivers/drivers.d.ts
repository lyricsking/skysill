import type { Application } from '../../declarations';
import { DriversService } from './drivers.class';
export * from './drivers.class';
export * from './drivers.schema';
export declare const drivers: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        drivers: DriversService;
    }
}
