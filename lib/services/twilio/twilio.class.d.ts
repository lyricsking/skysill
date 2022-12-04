import type { Params } from '@feathersjs/feathers';
import type { Application } from '../../declarations';
import type { TwilioQuery } from './twilio.schema';
export interface TwilioServiceOptions {
    app: Application;
}
export interface TwilioParams extends Params<TwilioQuery> {
}
export declare class TwilioService {
    options: TwilioServiceOptions;
    private accountSid;
    private authToken;
    private sid;
    private client;
    constructor(options: TwilioServiceOptions);
    sendVerification(mobile: string): Promise<any>;
    verify(mobile: string, otp: string): Promise<any>;
}
export declare const getOptions: (app: Application) => {
    app: Application;
};
