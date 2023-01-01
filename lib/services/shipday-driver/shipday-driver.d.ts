import type { Application } from '../../declarations';
import { ShipdayDriverService } from './shipday-driver.class';
export * from './shipday-driver.class';
export * from './shipday-driver.schema';
export declare const shipdayDriver: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        'shipday-driver': ShipdayDriverService;
    }
}
