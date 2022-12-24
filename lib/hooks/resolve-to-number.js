"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveToNumber = void 0;
const resolveToNumber = function (param) {
    return async (context) => {
        if (context.data == undefined) {
            return;
        }
        console.log(`Running hook resolveToNumber on ${context.path}.${context.method}`);
        if (typeof param == 'string') {
            _resolveToNumber(context, param);
        }
        else if (Array.isArray(param)) {
            for (let index = 0; index < param.length; index++) {
                const element = param[index];
                _resolveToNumber(context, element);
            }
        }
    };
};
exports.resolveToNumber = resolveToNumber;
function _resolveToNumber(context, param) {
    const value = context.data[param];
    if (!isNaN(value) && !isNaN(parseFloat(value))) {
        context.data[param] = +value;
    }
}
