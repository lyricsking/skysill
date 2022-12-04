"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberOfLength = exports.numberInRange = void 0;
function numberInRange(min = 0, max = 0) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}
exports.numberInRange = numberInRange;
function numberOfLength(length = 0) {
    return Math.random().toString().substring(2, length + 2);
}
exports.numberOfLength = numberOfLength;
