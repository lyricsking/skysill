import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  orderDataValidator,
  orderQueryValidator,
  orderResolver,
  orderDataResolver,
  orderQueryResolver,
  orderExternalResolver,
  orderPatchSchema,
  orderPatchResolver,
  orderPatchValidator,
  Order,
  OrderStatus
} from './order.schema'

import type { Application, HookContext, NextFunction } from '../../declarations'
import { OrderService, getOptions } from './order.class'
import { resolveToNumber } from '../../hooks/resolve-to-number'
import { generateId } from '../../hooks/generate-id'

export * from './order.class'
export * from './order.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const order = (app: Application) => {
  // Register our service on the Feathers application
  app.use('order', new OrderService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('order').hooks({
    around: {
      all: [],
      patch: [
        schemaHooks.validateData(orderPatchValidator),
        schemaHooks.resolveData(orderPatchResolver),
        patchOrder,
      ],
    },
    before: {
      all: [
        schemaHooks.validateQuery(orderQueryValidator),
        resolveToNumber(['subtotal', 'deliveryFee']),
        schemaHooks.resolveQuery(orderQueryResolver),
      ],
      create: [
        schemaHooks.validateData(orderDataValidator),
        schemaHooks.resolveData(orderDataResolver),
        generateId(11)
      ], 
    },
    after: {
      all: [schemaHooks.resolveResult(orderResolver), schemaHooks.resolveExternal(orderExternalResolver)],
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    order: OrderService
  }
}

export const patchOrder = async (context: HookContext, next: NextFunction) => {
  try {
    console.log(`Running hook onOrderPatch on ${context.path}.${context.method}`)
    
    const data = context.data;
    if(data.orderStatus != undefined && data.orderStatus != null){
      switch (data.orderStatus) {
        case OrderStatus.pending:
          context.params.query.orderStatus = OrderStatus.cart;
          break;
        case OrderStatus.accepted:
          // Vendor accepted to process the order
          context.params.query.orderStatus = OrderStatus.pending;
          break;
        case OrderStatus.confirmed:
          // Vendor confirmed order ready for delivery
          context.params.query.orderStatus = OrderStatus.accepted;
          break;
        default:
          break;
      }
    }

    const shouldUpdateDeliveryFee = (data.deliveryGeopoint != undefined && data.deliveryGeopoint != null)    
    if(shouldUpdateDeliveryFee){
      // Run logic to get delivery fee here
      
      // Update deliveryFee
      context.data.deliveryFee = undefined;
    }
    // Run Service method
    next();
  } catch (error) {
    
  }finally{

  }
}
