import type { Application } from '../../declarations';
import { PoptionsService } from './poptions.class';
export * from './poptions.class';
export * from './poptions.schema';
export declare const poptions: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        poptions: PoptionsService;
    }
}
