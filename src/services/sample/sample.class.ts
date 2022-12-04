import type { Id, NullableId, Params } from '@feathersjs/feathers'

import type { Application } from '../../declarations'
import type { Sample, SampleData, SampleQuery } from './sample.schema'

export interface SampleServiceOptions {
  app: Application
}

export interface SampleParams extends Params<SampleQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class SampleService {
  constructor(public options: SampleServiceOptions) {}

  async find(_params?: SampleParams): Promise<Sample[]> {
    return []
  }

  async get(id: Id, _params?: SampleParams): Promise<Sample> {
    return {
      id: 0,
      text: `A new message with ID: ${id}!`
    }
  }

  async create(data: SampleData, params?: SampleParams): Promise<Sample>
  async create(data: SampleData[], params?: SampleParams): Promise<Sample[]>
  async create(data: SampleData | SampleData[], params?: SampleParams): Promise<Sample | Sample[]> {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return {
      id: 0,
      ...data
    }
  }

  async update(id: NullableId, data: SampleData, _params?: SampleParams): Promise<Sample> {
    return {
      id: 0,
      ...data
    }
  }

  async patch(id: NullableId, data: SampleData, _params?: SampleParams): Promise<Sample> {
    return {
      id: 0,
      ...data
    }
  }

  async remove(id: NullableId, _params?: SampleParams): Promise<Sample> {
    return {
      id: 0,
      text: 'removed'
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
