import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams } from '@feathersjs/knex'
import { resolveAll } from '@feathersjs/schema'
import { authenticate } from '@feathersjs/authentication'
import type { ShopsData, ShopsResult, ShopsQuery } from './shops.schema'
import { shopsResolvers } from './shops.resolver'

export const shopsHooks = {
  around: {
    all: [authenticate('jwt'), resolveAll(shopsResolvers)]
  },
  before: {},
  after: {},
  error: {}
}

export interface ShopsParams extends KnexAdapterParams<ShopsQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ShopsService extends KnexService<ShopsResult, ShopsData, ShopsParams> {}
