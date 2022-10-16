import { business } from './business/business'
import { users } from './users/users.service'
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(business)
  app.configure(users)
  // All services will be registered here
}
