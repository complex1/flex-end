"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const models_1 = require("../models");
class UserRepository {
    constructor() {
        this.register = (user) => {
            const userModel = new models_1.UserModel(user);
            return userModel.save();
        };
        this.verify = (email, name) => {
            const query = { email, name };
            const update = { $set: { isVarified: true } };
            const options = { new: true };
            return models_1.UserModel.findOneAndUpdate(query, update, options);
        };
        this.login = (email, password) => {
            const query = { email, password };
            return models_1.UserModel.findOne(query);
        };
        this.updatePassword = (email, password) => {
            const query = { email };
            const update = { $set: { password } };
            const options = { new: true };
            return models_1.UserModel.findOneAndUpdate(query, update, options);
        };
    }
}
exports.UserRepository = UserRepository;
