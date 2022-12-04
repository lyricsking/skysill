import type { Application } from '../../declarations';
import { ModifierOptionService } from './modifier_option.class';
export * from './modifier_option.class';
export * from './modifier_option.schema';
export declare const modifierOption: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        modifierOption: ModifierOptionService;
    }
}
