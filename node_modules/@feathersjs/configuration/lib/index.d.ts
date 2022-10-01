import { Application } from '@feathersjs/feathers';
import { Schema } from '@feathersjs/schema';
import config from 'config';
declare const _default: (schema?: Schema<any>) => (app?: Application) => config.IConfig;
export = _default;
