import { schema, Ajv } from '@feathersjs/schema'
import type { Infer } from '@feathersjs/schema'
import { authenticationSettingsSchema } from '@feathersjs/authentication'

export const configurationSchema = schema(
  {
    $id: 'ApplicationConfiguration',
    type: 'object',
    additionalProperties: false,
    required: ['host', 'port', 'public', 'paginate'],
    properties: {
      host: { type: 'string' },
      port: { type: 'number' },
      public: { type: 'string' },
      sqlite: {
        type: 'object',
        properties: {
          client: { type: 'string' },
          connection: { type: 'string' }
        }
      },
      authentication: authenticationSettingsSchema,
      origins: {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      paginate: {
        type: 'object',
        additionalProperties: false,
        required: ['default', 'max'],
        properties: {
          default: { type: 'number' },
          max: { type: 'number' }
        }
      }
    }
  } as const,
  new Ajv({ coerceTypes: true})
)

export type ConfigurationSchema = Infer<typeof configurationSchema>
