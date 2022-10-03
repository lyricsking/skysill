import { shops } from './shops/shops.service'
import { business } from './business/business.service'
import { shoppers } from './shoppers/shoppers.service'
import { users } from './users/users.service'
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(shops)
  app.configure(business)
  app.configure(shoppers)
  app.configure(users)
  // All services will be registered here
}
