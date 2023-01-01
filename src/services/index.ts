import { shipdayOrder } from './shipdayOrder/shipdayOrder'
import { shipdayDriver } from './shipdayDriver/shipdayDriver'
import { productModifier } from './productModifier/productModifier'
import { productCategory } from './productCategory/productCategory'
import { product } from './product/product'
import { modifierOption } from './modifierOption/modifierOption'
import { modifier } from './modifier/modifier'
import { employeeRole } from './employeeRole/employeeRole'
import { driver } from './driver/driver'
import { business } from './business/business'
import { shop } from './shop/shop'
import { lineitem } from './lineitem/lineitem'
import { order } from './order/order'
import { wallet } from './wallet/wallet'
import { user } from './user/user'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(shipdayOrder)
  app.configure(shipdayDriver)
  app.configure(productModifier)
  app.configure(productCategory)
  app.configure(product)
  app.configure(modifierOption)
  app.configure(modifier)
  app.configure(employeeRole)
  app.configure(employeeRole)
  app.configure(driver)
  app.configure(business)
  app.configure(shop)
  app.configure(lineitem)
  app.configure(order)
  app.configure(wallet)
  app.configure(user)
  // All services will be registered here
}
