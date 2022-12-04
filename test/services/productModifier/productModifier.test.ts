import assert from 'assert'
import { app } from '../../../src/app'

describe('productModifier service', () => {
  it('registered the service', () => {
    const service = app.service('productModifier')

    assert.ok(service, 'Registered the service')
  })
})
