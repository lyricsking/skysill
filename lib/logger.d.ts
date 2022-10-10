import type { HookContext, NextFunction } from './declarations';
export declare const logger: import("winston").Logger;
export declare const logErrorHook: (context: HookContext, next: NextFunction) => Promise<void>;
