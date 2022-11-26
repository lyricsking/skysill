"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationCode = void 0;
const sendVerificationCode = async (context) => {
    console.log(`Running hook sendVerificationCode on ${context.path}.${context.method}`);
};
exports.sendVerificationCode = sendVerificationCode;
