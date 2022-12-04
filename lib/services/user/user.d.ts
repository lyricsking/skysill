import type { Application } from '../../declarations';
import { UserService } from './user.class';
export * from './user.class';
export * from './user.schema';
export declare const user: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        user: UserService;
    }
}
