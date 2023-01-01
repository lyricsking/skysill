// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../declarations'
import type {
  ShipdayDriver,
  ShipdayDriverData,
  ShipdayDriverPatch,
  ShipdayDriverQuery
} from './shipdayDriver.schema'

export interface ShipdayDriverServiceOptions {
  app: Application
}

export interface ShipdayDriverParams extends Params<ShipdayDriverQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class ShipdayDriverService
  implements ServiceInterface<ShipdayDriver, ShipdayDriverData, ShipdayDriverParams, ShipdayDriverPatch>
{
  constructor(public options: ShipdayDriverServiceOptions) {}

  async find(_params?: ShipdayDriverParams): Promise<ShipdayDriver[]> {
    return []
  }

  async get(id: Id, _params?: ShipdayDriverParams): Promise<ShipdayDriver> {
    return {
      id: 0,
      text: `A new message with ID: ${id}!`
    }
  }

  async create(data: ShipdayDriverData, params?: ShipdayDriverParams): Promise<ShipdayDriver>
  async create(data: ShipdayDriverData[], params?: ShipdayDriverParams): Promise<ShipdayDriver[]>
  async create(
    data: ShipdayDriverData | ShipdayDriverData[],
    params?: ShipdayDriverParams
  ): Promise<ShipdayDriver | ShipdayDriver[]> {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return {
      id: 0,
      ...data
    }
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(
    id: NullableId,
    data: ShipdayDriverData,
    _params?: ShipdayDriverParams
  ): Promise<ShipdayDriver> {
    return {
      id: 0,
      ...data
    }
  }

  async patch(
    id: NullableId,
    data: ShipdayDriverPatch,
    _params?: ShipdayDriverParams
  ): Promise<ShipdayDriver> {
    return {
      id: 0,
      text: `Fallback for ${id}`,
      ...data
    }
  }

  async remove(id: NullableId, _params?: ShipdayDriverParams): Promise<ShipdayDriver> {
    return {
      id: 0,
      text: 'removed'
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
