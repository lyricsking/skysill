import { Application, Params } from '@feathersjs/feathers';
import { Socket } from 'socket.io';
export declare type ParamsGetter = (socket: Socket) => any;
export declare type NextFunction = (err?: any) => void;
export interface FeathersSocket extends Socket {
    feathers?: Params & {
        [key: string]: any;
    };
}
export declare const disconnect: (app: Application, getParams: ParamsGetter) => (socket: FeathersSocket, next: NextFunction) => void;
export declare const params: (_app: Application, socketMap: WeakMap<any, any>) => (socket: FeathersSocket, next: NextFunction) => void;
export declare const authentication: (app: Application, getParams: ParamsGetter, settings?: any) => (socket: FeathersSocket, next: NextFunction) => void;
