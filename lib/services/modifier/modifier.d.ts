import type { Application } from '../../declarations';
import { ModifierService } from './modifier.class';
export * from './modifier.class';
export * from './modifier.schema';
export declare const modifier: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        modifier: ModifierService;
    }
}
