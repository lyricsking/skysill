import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams } from '@feathersjs/knex'
import { resolveAll } from '@feathersjs/schema'
import { authenticate } from '@feathersjs/authentication'
import type { ShoppersData, ShoppersResult, ShoppersQuery } from './shoppers.schema'
import { shoppersResolvers } from './shoppers.resolver'

export const shoppersHooks = {
  around: {
    all: [authenticate('jwt'), resolveAll(shoppersResolvers)]
  },
  before: {},
  after: {},
  error: {}
}

export interface ShoppersParams extends KnexAdapterParams<ShoppersQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ShoppersService extends KnexService<ShoppersResult, ShoppersData, ShoppersParams> {}
