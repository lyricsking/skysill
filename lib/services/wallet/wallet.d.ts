import type { Application } from '../../declarations';
import { WalletService } from './wallet.class';
export * from './wallet.class';
export * from './wallet.schema';
export declare const wallet: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        wallet: WalletService;
    }
}
