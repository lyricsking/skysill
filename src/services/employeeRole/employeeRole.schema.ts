// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

export const Role = {
  manager: 'manager',
  assistance: 'assistance'
}
export type Role = typeof Role;

// Main data model schema
export const employeeRoleSchema = Type.Object(
  {
    id: Type.Number(),
    businesId: Type.String(),
    shopId: Type.String(),
    role: StringEnum(Object.values(Role)),
  },
  { $id: 'EmployeeRole', additionalProperties: false }
)
export type EmployeeRole = Static<typeof employeeRoleSchema>
export const employeeRoleResolver = resolve<EmployeeRole, HookContext>({})

export const employeeRoleExternalResolver = resolve<EmployeeRole, HookContext>({})

// Schema for creating new entries
export const employeeRoleDataSchema = Type.Omit(employeeRoleSchema, ['id'], {
  $id: 'EmployeeRoleData'
})
export type EmployeeRoleData = Static<typeof employeeRoleDataSchema>
export const employeeRoleDataValidator = getDataValidator(employeeRoleDataSchema, dataValidator)
export const employeeRoleDataResolver = resolve<EmployeeRole, HookContext>({})

// Schema for updating existing entries
export const employeeRolePatchSchema = Type.Partial(employeeRoleSchema, {
  $id: 'EmployeeRolePatch'
})
export type EmployeeRolePatch = Static<typeof employeeRolePatchSchema>
export const employeeRolePatchValidator = getDataValidator(employeeRolePatchSchema, dataValidator)
export const employeeRolePatchResolver = resolve<EmployeeRole, HookContext>({})

// Schema for allowed query properties
export const employeeRoleQueryProperties = Type.Omit(employeeRoleSchema, [])
export const employeeRoleQuerySchema = Type.Intersect(
  [
    querySyntax(employeeRoleQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type EmployeeRoleQuery = Static<typeof employeeRoleQuerySchema>
export const employeeRoleQueryValidator = getValidator(employeeRoleQuerySchema, queryValidator)
export const employeeRoleQueryResolver = resolve<EmployeeRoleQuery, HookContext>({})
