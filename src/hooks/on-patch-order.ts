import type { HookContext, NextFunction } from '../declarations'
import { OrderStatus } from '../services/order/order.schema';

export const onPatchOrder = async (context: HookContext, next: NextFunction) => {
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
