import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { EmployeeRole, EmployeeRoleData, EmployeeRoleQuery } from './employee_role.schema'

export interface EmployeeRoleParams extends KnexAdapterParams<EmployeeRoleQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class EmployeeRoleService<ServiceParams extends Params = EmployeeRoleParams> extends KnexService<
  EmployeeRole,
  EmployeeRoleData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'employee_role'
  }
}
