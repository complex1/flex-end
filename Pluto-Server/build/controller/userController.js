"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const dataToResponseObject_1 = require("../mapper/dataToResponseObject");
const encryptDecrypt_1 = require("../halper/encryptDecrypt");
const service_1 = require("../service");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("../config"));
class UserController {
    constructor() {
        this.register = (User, cb) => {
            const user = Object.assign({}, User);
            user.password = (0, encryptDecrypt_1.encryptData)(user.password);
            this.userService.register(user)
                .then((data) => {
                const token = (0, encryptDecrypt_1.encryptData)(data.email + ':' + data.name);
                this.mailService.sendMail(data.email, 'Welcome to NodeJS', token);
                cb((0, dataToResponseObject_1.dataToResponseObject)(data, 'User registered successfully', true));
            })
                .catch((err) => {
                if (err.code === 11000) {
                    cb((0, dataToResponseObject_1.dataToResponseObject)(err, 'User already exists', false));
                }
                else if (err.name === 'ValidationError') {
                    cb((0, dataToResponseObject_1.dataToResponseObject)(err, 'User validation failed', false));
                }
                else {
                    cb((0, dataToResponseObject_1.dataToResponseObject)(err, 'User registration failed', false));
                }
            });
        };
        this.verify = (token, cb) => {
            const data = (0, encryptDecrypt_1.decryptData)(token);
            const [email, name] = data.split(':');
            this.userService.verify(email, name)
                .then((data) => {
                if (!data) {
                    cb((0, dataToResponseObject_1.dataToResponseObject)(data, 'User not found', false));
                }
                cb((0, dataToResponseObject_1.dataToResponseObject)(data, 'User verified successfully', true));
            })
                .catch((err) => {
                cb((0, dataToResponseObject_1.dataToResponseObject)(err, 'User verification failed', false));
            });
        };
        this.login = (email, password, cb) => {
            const encryptedPassword = (0, encryptDecrypt_1.encryptData)(password);
            this.userService.login(email, encryptedPassword)
                .then((data) => {
                var _a;
                if (!data) {
                    cb((0, dataToResponseObject_1.dataToResponseObject)(data, 'User not found', false));
                }
                const token = (0, jsonwebtoken_1.sign)({
                    email: data === null || data === void 0 ? void 0 : data.email,
                    name: data === null || data === void 0 ? void 0 : data.name,
                }, ((_a = config_1.default.security) === null || _a === void 0 ? void 0 : _a.jwt_secret) || 'token', { expiresIn: config_1.default.security.jwt_expiration });
                cb((0, dataToResponseObject_1.dataToResponseObject)({
                    token
                }, 'User login successfully', true));
            })
                .catch((err) => {
                cb((0, dataToResponseObject_1.dataToResponseObject)(err, 'User login failed', false));
            });
        };
        this.updatePassword = (email, password, cb) => {
            const encryptedPassword = (0, encryptDecrypt_1.encryptData)(password);
            this.userService.updatePassword(email, encryptedPassword)
                .then((data) => {
                if (!data) {
                    cb((0, dataToResponseObject_1.dataToResponseObject)(data, 'User not found', false));
                }
                cb((0, dataToResponseObject_1.dataToResponseObject)(data, 'Password updated successfully', true));
            })
                .catch((err) => {
                cb((0, dataToResponseObject_1.dataToResponseObject)(err, 'Password update failed', false));
            });
        };
        this.mailService = new service_1.MailService();
        this.userService = new service_1.UserService();
    }
}
exports.UserController = UserController;
