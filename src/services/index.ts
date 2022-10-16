import { shops } from './shops/shops'
import { products } from './products/products'
import { poptions } from './poptions/poptions'
import { pmodifiers } from './pmodifiers/pmodifiers'
import { pcategories } from './pcategories/pcategories'
import { orders } from './orders/orders'
import { lineitems } from './lineitems/lineitems'
import { business } from './business/business'
import { broles } from './broles/broles'
import { user } from './users/users'
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(shops)
  app.configure(products)
  app.configure(poptions)
  app.configure(pmodifiers)
  app.configure(pcategories)
  app.configure(orders)
  app.configure(lineitems)
  app.configure(business)
  app.configure(broles)
  app.configure(user)
  // All services will be registered here
}
