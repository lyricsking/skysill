import assert from 'assert'
import { app } from '../../../src/app'

describe('shops service', () => {
  it('registered the service', () => {
    const service = app.service('shops')

    assert.ok(service, 'Registered the service')
  })
})
