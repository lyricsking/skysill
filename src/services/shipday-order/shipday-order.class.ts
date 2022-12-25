import type { Id, NullableId, Params } from '@feathersjs/feathers'

import type { Application } from '../../declarations'
import type { ShipdayOrder, ShipdayOrderData, ShipdayOrderPatch, ShipdayOrderQuery } from './shipday-order.schema'

import axios from 'axios';

export interface ShipdayOrderServiceOptions {
  app: Application
}

export interface ShipdayOrderParams extends Params<ShipdayOrderQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class ShipdayOrderService {
  apiKey: string;
  url: string;
    
  constructor(public options: ShipdayOrderServiceOptions) {
    const shipday = require('shipday/integration');
    
    this.apiKey = options.app.get('shipday').apiKey;
    this.url = options.app.get('shipday').orderUrl;

    shipday()
  }

  async find(_params?: ShipdayOrderParams): Promise<ShipdayOrder[]> {
    const options = {
      method: 'GET',
      url: `${this.url}`,
      headers: {
        accept: 'application/json',
        Authorization: `Basic ${this.apiKey}`
      }
    };
    
    return await axios.request(options)
  }

  async get(id: Id, _params?: ShipdayOrderParams): Promise<ShipdayOrder> {
    const options = {
      method: 'GET',
      url: `${this.url}/${id}`,
      headers: {
        accept: 'application/json',
        Authorization: `Basic ${this.apiKey}`
      }
    };
    
    return await axios.request(options);
  }

  async create(data: ShipdayOrderData, params?: ShipdayOrderParams): Promise<ShipdayOrder>
  async create(data: ShipdayOrderData[], params?: ShipdayOrderParams): Promise<ShipdayOrder[]>
  async create(
    data: ShipdayOrderData | ShipdayOrderData[],
    params?: ShipdayOrderParams
  ): Promise<ShipdayOrder | ShipdayOrder[]> { 
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    const options = {
      method: 'POST',
      url: this.url,
      headers: {
        accept: 'application/json',
        Authorization: `Basic ${this.apiKey}`, 
        'Content-Type': 'application/json'
      },
      data
    };

    const res = await axios.request(options);
    
    if(res.status == 200 && res.data.success == true){
      return data.orderNumber = res.data.orderId
    }

    return res.data;
  }  
  
  async patch(id: NullableId, data: ShipdayOrderPatch, params: ShipdayOrderParams){
    const options = {
      method: 'POST',
      url: `${this.url}/edit/${id}`,
      headers: {
        accept: 'application/json',
        Authorization: `Basic ${this.apiKey}`, 
        'Content-Type': 'application/json'
      },
      data
    };

    const res = await axios.request(options);
    
    if(res.status == 200 && res.data.success == true){
      return data.orderNumber = res.data.orderId
    }

    return res.data;
  }

  async remove(id: Id, _params?: ShipdayOrderParams): Promise<void> {
    const options = {
      method: 'DELETE',
      url: `${this.url}/${id}`,
      headers: {
        accept: 'application/json',
        Authorization: `Bsaic ${this.apiKey}`
      }
    };
    
    const res = await axios.request(options);
    if(res.status == 204){

    }else {
      
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
