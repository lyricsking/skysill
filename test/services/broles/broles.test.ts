import assert from 'assert'
import { app } from '../../../src/app'

describe('broles service', () => {
  it('registered the service', () => {
    const service = app.service('broles')

    assert.ok(service, 'Registered the service')
  })
})
