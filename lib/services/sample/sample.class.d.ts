import type { Id, NullableId, Params } from '@feathersjs/feathers';
import type { Application } from '../../declarations';
import type { Sample, SampleData, SampleQuery } from './sample.schema';
export interface SampleServiceOptions {
    app: Application;
}
export interface SampleParams extends Params<SampleQuery> {
}
export declare class SampleService {
    options: SampleServiceOptions;
    constructor(options: SampleServiceOptions);
    find(_params?: SampleParams): Promise<Sample[]>;
    get(id: Id, _params?: SampleParams): Promise<Sample>;
    create(data: SampleData, params?: SampleParams): Promise<Sample>;
    create(data: SampleData[], params?: SampleParams): Promise<Sample[]>;
    update(id: NullableId, data: SampleData, _params?: SampleParams): Promise<Sample>;
    patch(id: NullableId, data: SampleData, _params?: SampleParams): Promise<Sample>;
    remove(id: NullableId, _params?: SampleParams): Promise<Sample>;
}
export declare const getOptions: (app: Application) => {
    app: Application;
};
