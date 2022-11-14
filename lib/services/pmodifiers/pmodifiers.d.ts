import type { Application } from '../../declarations';
import { PmodifiersService } from './pmodifiers.class';
export * from './pmodifiers.class';
export * from './pmodifiers.schema';
export declare const pmodifiers: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        pmodifiers: PmodifiersService;
    }
}
