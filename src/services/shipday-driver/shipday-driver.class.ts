import type { Id, NullableId, Params } from '@feathersjs/feathers'

import type { Application } from '../../declarations'
import type { ShipdayDriver, ShipdayDriverData, ShipdayDriverQuery } from './shipday-driver.schema'

export interface ShipdayDriverServiceOptions {
  app: Application
}

export interface ShipdayDriverParams extends Params<ShipdayDriverQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class ShipdayDriverService {
  private apiKey: string;

  constructor(public options: ShipdayDriverServiceOptions) {
    this.apiKey = options.app.get('shipday').apiKey;
  }

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
    data: ShipdayDriverData,
    _params?: ShipdayDriverParams
  ): Promise<ShipdayDriver> {
    return {
      id: 0,
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
