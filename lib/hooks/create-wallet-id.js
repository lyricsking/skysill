"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWalletId = void 0;
const createWalletId = async (context) => {
    console.log(`Running hook createWalletId on ${context.path}.${context.method}`);
    const id = context.data.id;
    const owner = context.data.owner;
    const balance = context.data.balance;
    context.data = {
        ownerId: owner + ':' + id,
        balance: balance
    };
};
exports.createWalletId = createWalletId;
