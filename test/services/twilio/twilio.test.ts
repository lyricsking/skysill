import assert from 'assert'
import { app } from '../../../src/app'

describe('twilio service', () => {
  it('registered the service', () => {
    const service = app.service('twilio')

    assert.ok(service, 'Registered the service')
  })
})
