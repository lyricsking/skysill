import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams } from '@feathersjs/knex'
import { resolveAll } from '@feathersjs/schema'

import type { BusinessData, BusinessResult, BusinessQuery } from './business.schema'
import { businessResolvers } from './business.resolver'

export const businessHooks = {
  around: {
    all: [resolveAll(businessResolvers)]
  },
  before: {},
  after: {},
  error: {}
}

export interface BusinessParams extends KnexAdapterParams<BusinessQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class BusinessService extends KnexService<BusinessResult, BusinessData, BusinessParams> {}
