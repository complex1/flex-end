"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT,
    db: {
        host: process.env.MONGO_URL,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
    },
    security: {
        secret_key: process.env.SECRET_KEY || '',
        secret_iv: process.env.SECRET_IV || '',
        ecnryption_method: process.env.ECNRYPTION_METHOD || '',
        jwt_secret: process.env.JWT_SECRET_KEY,
        jwt_expiration: process.env.JWT_EXPIRATION_TIME,
        jwt_algorithm: process.env.JWT_ALGORITHM,
    },
    routes: {
        basePath: '/api',
        user: {
            login: '/login',
            register: '/register',
            verify: '/verify',
            logout: '/logout',
            profile: '/profile'
        }
    }
};
