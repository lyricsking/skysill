import assert from 'assert'
import { app } from '../../../src/app'

describe('pmodifiers service', () => {
  it('registered the service', () => {
    const service = app.service('pmodifiers')

    assert.ok(service, 'Registered the service')
  })
})
