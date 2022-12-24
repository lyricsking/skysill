import type { HookContext } from '../declarations'
import { OrderStatus } from '../services/order/order.schema';

export const onOrderUpdate = async (context: HookContext) => {
  console.log(`Running hook onOrderUpdate on ${context.path}.${context.method}`)
  
  const data = context.data;

  if(data.orderStatus != undefined && data.orderStatus != null){
    switch (data.orderStatus) {
      case OrderStatus.pending:

        break;
      case OrderStatus.accepted:
        // Vendor accepted to process the order
        
        break;
      case OrderStatus.confirmed:
        // Vendor confirmed order ready for delivery
        break;
      default:
        break;
    }
  }
}
