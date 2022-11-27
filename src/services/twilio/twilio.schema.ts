import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const twilioSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Twilio', additionalProperties: false }
)
export type Twilio = Static<typeof twilioSchema>
export const twilioResolver = resolve<Twilio, HookContext>({
  properties: {}
})

export const twilioExternalResolver = resolve<Twilio, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const twilioDataSchema = Type.Pick(twilioSchema, ['text'], {
  $id: 'TwilioData',
  additionalProperties: false
})
export type TwilioData = Static<typeof twilioDataSchema>
export const twilioDataValidator = getDataValidator(twilioDataSchema, dataValidator)
export const twilioDataResolver = resolve<Twilio, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const twilioQueryProperties = Type.Pick(twilioSchema, ['id', 'text'], { additionalProperties: false })
export const twilioQuerySchema = querySyntax(twilioQueryProperties)
export type TwilioQuery = Static<typeof twilioQuerySchema>
export const twilioQueryValidator = getValidator(twilioQuerySchema, queryValidator)
export const twilioQueryResolver = resolve<TwilioQuery, HookContext>({
  properties: {}
})
