import assert from 'assert'
import { app } from '../../../src/app'

describe('pcategories service', () => {
  it('registered the service', () => {
    const service = app.service('pcategories')

    assert.ok(service, 'Registered the service')
  })
})
