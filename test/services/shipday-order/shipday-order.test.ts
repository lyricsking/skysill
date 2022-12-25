import assert from 'assert'
import { app } from '../../../src/app'

describe('shipday-order service', () => {
  it('registered the service', () => {
    const service = app.service('shipday-order')

    assert.ok(service, 'Registered the service')
  })
})
