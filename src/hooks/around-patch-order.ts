import { BadRequest } from '@feathersjs/errors/lib';
import knex from 'knex';
import { ExceptionHandler } from 'winston';
import type { HookContext, NextFunction } from '../declarations';
import { OrderStatus } from '../services/order/order';
import { ShipdayOrderData } from '../services/shipday-order/shipday-order.schema';

export const aroundPatchOrder = async (context: HookContext, next: NextFunction) => {
  try {
    console.log(`Running hook onOrderPatch on ${context.path}.${context.method}`)
    
    const data = context.data;
    if(data.orderStatus != undefined && data.orderStatus != null){
      switch (data.orderStatus) {
        case OrderStatus.pending:
          context.params.query.orderStatus = OrderStatus.cart;
          //
          _chargeWallet(context)
          // Run Service method
          next();
          break;
        case OrderStatus.accepted:
          // Vendor accepted to process the order
          context.params.query.orderStatus = OrderStatus.pending;
          // 
          _initDelivery(context)
          // Run Service method
          next();
          break;
        case OrderStatus.declined:
          // Vendor declined order
          context.params.query.orderStatus = OrderStatus.pending;
          // Run Service method
          next();
          break;
        default:
          break;
      }
    }
  } catch (error) {
    
  }finally{

  }
}

async function _chargeWallet(context: HookContext<any>) {
  const id: string = '' + context.id;
    
  const order = await context.app.service('order')._get(id);

  const amount: number = (order.subtotal ?? 0) + (order.deliveryFee ?? 0);

  // Obtain row lock here sqlite does not support

  const txn = await context.app.service('transaction').create({
    walletId: 'user:' + context.data.shopperId,
    amount: amount,
    pend: true,
    narrations: `Payment transaction for order id: ${id}`
  })

  const txnId = txn.id;
  if(txnId == null || txnId == undefined) {
    throw new BadRequest('Cannot create order transaction')
  }

  context.data.transactionId = txn.id;
}

async function _initDelivery(context: HookContext<any>) {
  //const data: ShipdayOrderData = {};

  //context.app.service('shipday-order').create({})
}

