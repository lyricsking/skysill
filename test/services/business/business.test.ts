import assert from 'assert'
import { app } from '../../../src/app'

describe('business service', () => {
  it('registered the service', () => {
    const service = app.service('business')

    assert.ok(service, 'Registered the service')
  })
})
