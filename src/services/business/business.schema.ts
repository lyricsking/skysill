// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const businessSchema = Type.Object(
  {
    id: Type.String(),
    ownerId: Type.String(),
    name: Type.String(),
    contactName: Type.String(),
    contactPhone: Type.String(),
    contactEmail: Type.String(), 
    categories: Type.String(),
    tags: Type.String()
  },
  { $id: 'Business', additionalProperties: false }
)
export type Business = Static<typeof businessSchema>
export const businessResolver = resolve<Business, HookContext>({})

export const businessExternalResolver = resolve<Business, HookContext>({})

// Schema for creating new entries
export const businessDataSchema = Type.Omit(businessSchema, ['id'], {
  $id: 'BusinessData'
})
export type BusinessData = Static<typeof businessDataSchema>
export const businessDataValidator = getDataValidator(businessDataSchema, dataValidator)
export const businessDataResolver = resolve<Business, HookContext>({})

// Schema for updating existing entries
export const businessPatchSchema = Type.Partial(businessSchema, {
  $id: 'BusinessPatch'
})
export type BusinessPatch = Static<typeof businessPatchSchema>
export const businessPatchValidator = getDataValidator(businessPatchSchema, dataValidator)
export const businessPatchResolver = resolve<Business, HookContext>({})

// Schema for allowed query properties
export const businessQueryProperties = Type.Omit(businessSchema, [])
export const businessQuerySchema = Type.Intersect(
  [
    querySyntax(businessQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type BusinessQuery = Static<typeof businessQuerySchema>
export const businessQueryValidator = getValidator(businessQuerySchema, queryValidator)
export const businessQueryResolver = resolve<BusinessQuery, HookContext>({})
