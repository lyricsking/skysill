import assert from 'assert'
import { app } from '../../../src/app'

describe('sample service', () => {
  it('registered the service', () => {
    const service = app.service('sample')

    assert.ok(service, 'Registered the service')
  })
})
