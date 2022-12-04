import type { Application } from '../../declarations';
import { DriverService } from './driver.class';
export * from './driver.class';
export * from './driver.schema';
export declare const driver: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        driver: DriverService;
    }
}
