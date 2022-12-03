import type { Id, NullableId, Params } from '@feathersjs/feathers'
import { setup } from 'mocha';
import { Twilio } from 'twilio';

import type { Application } from '../../declarations'
import type { Twilio as mTwilio, TwilioData, TwilioQuery } from './twilio.schema'

export interface TwilioServiceOptions {
  app: Application
}

export interface TwilioParams extends Params<TwilioQuery> {}

export class TwilioService {

  private accountSid: string = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  private authToken: string = '-';
  private sid: string = '-';
  
  private client: Twilio;


  constructor(public options: TwilioServiceOptions) {
    this.client = new Twilio(this.accountSid, this.authToken);
  }

  async sendVerification(mobile: string): Promise<any> {
    // Initiate user mobile verification here
    const verification = await this.client.verify.services(this.sid)
      .verifications
      .create({ to: mobile, channel: 'sms' });

    console.log(verification);

    return { status: verification.status };
  }

  async verify(mobile: string, otp: string): Promise<any> {
    const user = await this.options.app.service('user')._get(0);

    // Initiate user mobile verification here
    const verification = await this.client.verify.services(this.sid)
      .verificationChecks
      .create({ to: mobile, code: otp });

    const status = verification.status;

    if (status === 'approved') {
      return {
        status: 'successful',
      };
    }

    return { status };

  }
}

export const getOptions = (app: Application) => {
  return { app }
}