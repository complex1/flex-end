"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const dataToResponseObject_1 = require("../mapper/dataToResponseObject");
const checkAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.send((0, dataToResponseObject_1.dataToResponseObject)(null, 'Unauthorized', false, '/login'));
    }
    else {
        try {
            const decodedToken = jsonwebtoken_1.default.verify(token, config_1.default.security.jwt_secret || 'token');
            req.userData = { email: decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.email, name: decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.name };
            next();
        }
        catch (err) {
            res.send((0, dataToResponseObject_1.dataToResponseObject)(null, 'Unauthorized', false, '/login'));
        }
    }
};
