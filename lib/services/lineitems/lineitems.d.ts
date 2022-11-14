import type { Application } from '../../declarations';
import { LineitemsService } from './lineitems.class';
export * from './lineitems.class';
export * from './lineitems.schema';
export declare const lineitems: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        lineitems: LineitemsService;
    }
}
