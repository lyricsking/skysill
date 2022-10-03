import { schema, querySyntax } from '@feathersjs/schema'
import type { Infer } from '@feathersjs/schema'
import { UsersData } from '../users/users.schema'

// Schema for the basic data model (e.g. creating new entries)
export const businessDataSchema = schema({
  $id: 'BusinessData',
  type: 'object',
  additionalProperties: false,
  required:['contactName', 'contactPhone','activity'],
  properties: {
    contactName: {
      type: 'string'
    },
    contactPhone: {type:'string'},
    activity:{type:'string'}
  }
} as const)

export type BusinessData = Infer<typeof businessDataSchema>

// Schema for making partial updates
export const businessPatchSchema = schema({
  $id: 'BusinessPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...businessDataSchema.properties
  }
} as const)

export type BusinessPatch = Infer<typeof businessPatchSchema>

// Schema for the data that is being returned
export const businessResultSchema = schema({
  $id: 'BusinessResult',
  type: 'object',
  additionalProperties: false,
  required: [...businessDataSchema.required, 'id'],
  properties: {
    ...businessDataSchema.properties,
    id: {
      type: 'number'
    },
    owner: {$ref: 'UserData'},
  }
} as const)

export type BusinessResult = Infer<typeof businessResultSchema>&{
  owner: UsersData
}

// Schema for allowed query properties
export const businessQuerySchema = schema({
  $id: 'BusinessQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(businessResultSchema.properties)
  }
} as const)

export type BusinessQuery = Infer<typeof businessQuerySchema>
