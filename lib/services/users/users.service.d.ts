import type { Application } from '../../declarations';
import { UsersService } from './users.class';
export declare function users(app: Application): void;
declare module '../../declarations' {
    interface ServiceTypes {
        users: UsersService;
    }
}
