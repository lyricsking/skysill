import assert from 'assert'
import { app } from '../../../src/app'

describe('lineitems service', () => {
  it('registered the service', () => {
    const service = app.service('lineitems')

    assert.ok(service, 'Registered the service')
  })
})
