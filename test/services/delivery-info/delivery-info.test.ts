import assert from 'assert'
import { app } from '../../../src/app'

describe('delivery-info service', () => {
  it('registered the service', () => {
    const service = app.service('delivery-info')

    assert.ok(service, 'Registered the service')
  })
})
