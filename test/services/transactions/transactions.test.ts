import assert from 'assert'
import { app } from '../../../src/app'

describe('transactions service', () => {
  it('registered the service', () => {
    const service = app.service('transactions')

    assert.ok(service, 'Registered the service')
  })
})
