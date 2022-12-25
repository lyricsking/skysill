import type { Id, NullableId, Params } from '@feathersjs/feathers';
import type { Application } from '../../declarations';
import type { Shipday, ShipdayData, ShipdayQuery } from './shipday.schema';
export interface ShipdayServiceOptions {
    app: Application;
}
export interface ShipdayParams extends Params<ShipdayQuery> {
}
export declare class ShipdayService {
    options: ShipdayServiceOptions;
    constructor(options: ShipdayServiceOptions);
    find(_params?: ShipdayParams): Promise<Shipday[]>;
    get(id: Id, _params?: ShipdayParams): Promise<Shipday>;
    create(data: ShipdayData, params?: ShipdayParams): Promise<Shipday>;
    create(data: ShipdayData[], params?: ShipdayParams): Promise<Shipday[]>;
    update(id: NullableId, data: ShipdayData, _params?: ShipdayParams): Promise<Shipday>;
    patch(id: NullableId, data: ShipdayData, _params?: ShipdayParams): Promise<Shipday>;
    remove(id: NullableId, _params?: ShipdayParams): Promise<Shipday>;
}
export declare const getOptions: (app: Application) => {
    app: Application;
};
