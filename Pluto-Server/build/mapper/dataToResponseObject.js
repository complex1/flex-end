"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataToResponseObject = void 0;
const dataToResponseObject = (data, message, success, redirect) => {
    return {
        success,
        message,
        data,
        redirect: redirect || ''
    };
};
exports.dataToResponseObject = dataToResponseObject;
