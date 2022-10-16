import { lineitems } from './lineitems/lineitems'
import { orders } from './orders/orders'
import { poptions } from './poptions/poptions'
import { pmodifiers } from './pmodifiers/pmodifiers'
import { broles } from './broles/broles'
import { products } from './products/products'
import { productCategory } from './pcategories/pcategories'
import { shop } from './shops/shops'
import { business } from './business/business'
import { users } from './users/users.service'
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(lineitems)
  app.configure(orders)
  app.configure(poptions)
  app.configure(pmodifiers)
  app.configure(broles)
  app.configure(products)
  app.configure(productCategory)
  app.configure(shop)
  app.configure(business)
  app.configure(users)
  // All services will be registered here
}
