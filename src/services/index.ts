import { twilio } from './twilio/twilio'
import { driver } from './driver/driver'
import { transaction } from './transaction/transaction'
import { wallet } from './wallet/wallet'
import { shop } from './shop/shop'
import { product } from './product/product'
import { modifierOption } from './modifier_option/modifier_option'
import { modifier } from './modifier/modifier'
import { productCategory } from './product_category/product_category'
import { order } from './order/order'
import { lineitem } from './lineitem/lineitem'
import { business } from './business/business'
import { employeeRole } from './employee_role/employee_role'
import { user } from './user/user'
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(twilio)
  app.configure(driver)
  app.configure(transaction)
  app.configure(wallet)
  app.configure(shop)
  app.configure(product)
  app.configure(modifier)
  app.configure(modifierOption)
  app.configure(productCategory)
  app.configure(order)
  app.configure(lineitem)
  app.configure(business)
  app.configure(employeeRole)
  app.configure(user)
  // All services will be registered here
}
