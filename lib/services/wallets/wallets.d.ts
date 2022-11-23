import type { Application } from '../../declarations';
import { WalletsService } from './wallets.class';
export * from './wallets.class';
export * from './wallets.schema';
export declare const wallets: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        wallets: WalletsService;
    }
}
