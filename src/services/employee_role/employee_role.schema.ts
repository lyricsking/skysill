import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const employeeRoleSchema = Type.Object(
  {
    id: Type.Number(),
    businesId: Type.String(),
    shopId: Type.String(),
    role: Type.Enum(
      {
       manager: 'manager',
       assistance: 'assistance'
      }),
  },
  { $id: 'EmployeeRole', additionalProperties: false }
)
export type EmployeeRole = Static<typeof employeeRoleSchema>
export const employeeRoleResolver = resolve<EmployeeRole, HookContext>({
  properties: {}
})

export const employeeRoleExternalResolver = resolve<EmployeeRole, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const employeeRoleDataSchema = Type.Omit(employeeRoleSchema, ['id'], {
  $id: 'EmployeeRoleData',
  additionalProperties: false
})
export type EmployeeRoleData = Static<typeof employeeRoleDataSchema>
export const employeeRoleDataValidator = getDataValidator(employeeRoleDataSchema, dataValidator)
export const employeeRoleDataResolver = resolve<EmployeeRole, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const employeeRoleQueryProperties = Type.Omit(employeeRoleSchema, [], { additionalProperties: false })
export const employeeRoleQuerySchema = querySyntax(employeeRoleQueryProperties)
export type EmployeeRoleQuery = Static<typeof employeeRoleQuerySchema>
export const employeeRoleQueryValidator = getValidator(employeeRoleQuerySchema, queryValidator)
export const employeeRoleQueryResolver = resolve<EmployeeRoleQuery, HookContext>({
  properties: {}
})
