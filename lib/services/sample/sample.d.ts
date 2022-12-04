import type { Application } from '../../declarations';
import { SampleService } from './sample.class';
export * from './sample.class';
export * from './sample.schema';
export declare const sample: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        sample: SampleService;
    }
}
