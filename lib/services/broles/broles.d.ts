import type { Application } from '../../declarations';
import { BrolesService } from './broles.class';
export * from './broles.class';
export * from './broles.schema';
export declare const broles: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        broles: BrolesService;
    }
}
