import type { Id, NullableId, Params } from '@feathersjs/feathers';
import type { Application } from '../../declarations';
import type { ShipdayDriver, ShipdayDriverData, ShipdayDriverQuery } from './shipday-driver.schema';
export interface ShipdayDriverServiceOptions {
    app: Application;
}
export interface ShipdayDriverParams extends Params<ShipdayDriverQuery> {
}
export declare class ShipdayDriverService {
    options: ShipdayDriverServiceOptions;
    private apiKey;
    constructor(options: ShipdayDriverServiceOptions);
    find(_params?: ShipdayDriverParams): Promise<ShipdayDriver[]>;
    get(id: Id, _params?: ShipdayDriverParams): Promise<ShipdayDriver>;
    create(data: ShipdayDriverData, params?: ShipdayDriverParams): Promise<ShipdayDriver>;
    create(data: ShipdayDriverData[], params?: ShipdayDriverParams): Promise<ShipdayDriver[]>;
    update(id: NullableId, data: ShipdayDriverData, _params?: ShipdayDriverParams): Promise<ShipdayDriver>;
    patch(id: NullableId, data: ShipdayDriverData, _params?: ShipdayDriverParams): Promise<ShipdayDriver>;
    remove(id: NullableId, _params?: ShipdayDriverParams): Promise<ShipdayDriver>;
}
export declare const getOptions: (app: Application) => {
    app: Application;
};
