import type { Application } from '../../declarations';
import { LineitemService } from './lineitem.class';
export * from './lineitem.class';
export * from './lineitem.schema';
export declare const lineitem: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        lineitem: LineitemService;
    }
}
