import assert from 'assert'
import { app } from '../../../src/app'

describe('shipday-driver service', () => {
  it('registered the service', () => {
    const service = app.service('shipday-driver')

    assert.ok(service, 'Registered the service')
  })
})
