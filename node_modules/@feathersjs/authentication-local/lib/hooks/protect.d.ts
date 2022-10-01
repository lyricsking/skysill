import { HookContext, NextFunction } from '@feathersjs/feathers';
/**
 * @deprecated For reliable safe data representations use Feathers schema dispatch resolvers.
 * See https://dove.docs.feathersjs.com/api/schema/resolvers.html#safe-data-resolvers for more information.
 */
declare const _default: (...fields: string[]) => (context: HookContext, next?: NextFunction) => Promise<void>;
export default _default;
