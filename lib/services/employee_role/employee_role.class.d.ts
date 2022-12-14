import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { EmployeeRole, EmployeeRoleData, EmployeeRoleQuery } from './employee_role.schema';
export interface EmployeeRoleParams extends KnexAdapterParams<EmployeeRoleQuery> {
}
export declare class EmployeeRoleService<ServiceParams extends Params = EmployeeRoleParams> extends KnexService<EmployeeRole, EmployeeRoleData, ServiceParams> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
