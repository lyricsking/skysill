import type { Id, NullableId, Params } from '@feathersjs/feathers'

import type { Application } from '../../declarations'
import type { ShipdayOrder, ShipdayOrderData, ShipdayOrderQuery } from './shipday-order.schema'

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
    return []
  }

  async get(id: Id, _params?: ShipdayOrderParams): Promise<ShipdayOrder> {
    const axios = require('axios');
  
    const options = {
      method: 'GET',
      url: `${this.url}/${id}`,
      headers: {
        accept: 'application/json',
        Authorization: `Basic ${this.apiKey}`
      }
    };
  
    axios.request(options)
    .then((response: { data: any; }) => {
      console.log(response.data);
    })
    .catch(function (error: any) {
      console.error(error);
    });

    return Object()
  }

  async create(data: ShipdayOrderData, params?: ShipdayOrderParams): Promise<ShipdayOrder>{ 
    const options = {
      method: 'POST',
      url: this.url,
      headers: {
        accept: 'application/json',
        Authorization: `Basic ${this.apiKey}`, 
        'Content-Type': 'application/json'
      },
      data: {
        orderNumber: '99qT5A',
        customerName: 'Mr. Jhon Mason',
        customerAddress: '556 Crestlake Dr, San Francisco, CA 94132, USA',
        customerEmail: 'jhonMason@gmail.com',
        customerPhoneNumber: '+14152392212',
        restaurantName: 'Popeyes Louisiana Kitchen',
        restaurantAddress: '890 Geneva Ave, San Francisco, CA 94112, United States',
        restaurantPhoneNumber: '+14152392013',
        expectedDeliveryDate: '2021-06-03',
        expectedPickupTime: '17:45:00',
        expectedDeliveryTime: '19:22:00',
        pickupLatitude: 41.53867,
        pickupLongitude: -72.0827,
        deliveryLatitude: 41.53867,
        deliveryLongitude: -72.0827,
        tips: 2.5,
        tax: 1.5,
        discountAmount: 1.5,
        deliveryFee: 3,
        totalOrderCost: 13.47,
        deliveryInstruction: 'fast',
        orderSource: 'Seamless',
        additionalId: '4532',
        clientRestaurantId: 12,
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  }  
  
  async remove(id: NullableId, _params?: ShipdayOrderParams): Promise<ShipdayOrder> {
    return {
      id: 0,
      order: Object()
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
