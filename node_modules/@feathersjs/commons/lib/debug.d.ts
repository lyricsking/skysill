export declare type DebugFunction = (...args: any[]) => void;
export declare type DebugInitializer = (name: string) => DebugFunction;
export declare function noopDebug(): DebugFunction;
export declare function setDebug(debug: DebugInitializer): void;
export declare function createDebug(name: string): (...args: any[]) => void;
