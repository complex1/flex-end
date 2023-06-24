"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userObjectMapper = void 0;
const userObjectMapper = (user) => {
    return {
        name: user.name,
        email: user.email,
        isVarified: user.isVarified,
        avatar: user.avatar
    };
};
exports.userObjectMapper = userObjectMapper;
