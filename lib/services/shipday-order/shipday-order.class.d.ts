import type { Id, NullableId, Params } from '@feathersjs/feathers';
import type { Application } from '../../declarations';
import type { ShipdayOrder, ShipdayOrderData, ShipdayOrderPatch, ShipdayOrderQuery } from './shipday-order.schema';
export interface ShipdayOrderServiceOptions {
    app: Application;
}
export interface ShipdayOrderParams extends Params<ShipdayOrderQuery> {
}
export declare class ShipdayOrderService {
    options: ShipdayOrderServiceOptions;
    apiKey: string;
    url: string;
    constructor(options: ShipdayOrderServiceOptions);
    find(_params?: ShipdayOrderParams): Promise<ShipdayOrder[]>;
    get(id: Id, _params?: ShipdayOrderParams): Promise<ShipdayOrder>;
    create(data: ShipdayOrderData, params?: ShipdayOrderParams): Promise<ShipdayOrder>;
    create(data: ShipdayOrderData[], params?: ShipdayOrderParams): Promise<ShipdayOrder[]>;
    patch(id: NullableId, data: ShipdayOrderPatch, params: ShipdayOrderParams): Promise<any>;
    remove(id: Id, _params?: ShipdayOrderParams): Promise<void>;
}
export declare const getOptions: (app: Application) => {
    app: Application;
};
