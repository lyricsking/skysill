import { twilio } from './twilio/twilio'
import { drivers } from './driver/driver'
import { transactions } from './transaction/transaction'
import { wallets } from './wallet/wallet'
import { shops } from './shop/shop'
import { products } from './product/product'
import { poptions } from './modifier_option/modifier_option'
import { pmodifiers } from './modifier/modifier'
import { pcategories } from './product_category/product_category'
import { orders } from './order/order'
import { lineitems } from './lineitem/lineitem'
import { business } from './business/business'
import { broles } from './employee_role/employee_role'
import { user } from './user/user'
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(twilio)
  app.configure(drivers)
  app.configure(transactions)
  app.configure(wallets)
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
