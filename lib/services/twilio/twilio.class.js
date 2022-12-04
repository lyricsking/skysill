"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.TwilioService = void 0;
const twilio_1 = require("twilio");
class TwilioService {
    constructor(options) {
        this.options = options;
        this.accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
        this.authToken = '-';
        this.sid = '-';
        this.client = new twilio_1.Twilio(this.accountSid, this.authToken);
    }
    async sendVerification(mobile) {
        // Initiate user mobile verification here
        const verification = await this.client.verify.services(this.sid)
            .verifications
            .create({ to: mobile, channel: 'sms' });
        console.log(verification);
        return { status: verification.status };
    }
    async verify(mobile, otp) {
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
exports.TwilioService = TwilioService;
const getOptions = (app) => {
    return { app };
};
exports.getOptions = getOptions;
