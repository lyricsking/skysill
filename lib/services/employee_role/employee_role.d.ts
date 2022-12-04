import type { Application } from '../../declarations';
import { EmployeeRoleService } from './employee_role.class';
export * from './employee_role.class';
export * from './employee_role.schema';
export declare const employeeRole: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        employeeRole: EmployeeRoleService;
    }
}
