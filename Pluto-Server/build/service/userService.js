"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userObjectMapper_1 = require("../mapper/userObjectMapper");
const repository_1 = require("../repository");
class UserService {
    constructor() {
        this.register = (user) => {
            return new Promise((resolve, reject) => {
                this.userRepository.register(user)
                    .then((data) => {
                    resolve((0, userObjectMapper_1.userObjectMapper)(data));
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        };
        this.verify = (email, name) => {
            return new Promise((resolve, reject) => {
                this.userRepository.verify(email, name)
                    .then((data) => {
                    if (!data) {
                        resolve(data);
                    }
                    resolve((0, userObjectMapper_1.userObjectMapper)(data));
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        };
        this.login = (email, password) => {
            return new Promise((resolve, reject) => {
                this.userRepository.login(email, password)
                    .then((data) => {
                    if (!data) {
                        resolve(data);
                    }
                    resolve((0, userObjectMapper_1.userObjectMapper)(data));
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        };
        this.updatePassword = (email, password) => {
            return new Promise((resolve, reject) => {
                this.userRepository.updatePassword(email, password)
                    .then((data) => {
                    if (!data) {
                        resolve(data);
                    }
                    resolve((0, userObjectMapper_1.userObjectMapper)(data));
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        };
        this.userRepository = new repository_1.UserRepository();
    }
}
exports.UserService = UserService;
