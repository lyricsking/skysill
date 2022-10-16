import assert from 'assert'
import { app } from '../../../src/app'

describe('poptions service', () => {
  it('registered the service', () => {
    const service = app.service('poptions')

    assert.ok(service, 'Registered the service')
  })
})
