"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const express_1 = require("express");
const controller_1 = require("../controller");
const userRouter = (0, express_1.Router)();
userRouter.post(config_1.default.routes.user.register, (req, res) => {
    const body = req.body;
    const userController = new controller_1.UserController();
    userController.register(body, (data) => {
        res.send(data);
    });
});
userRouter.get(config_1.default.routes.user.verify, (req, res) => {
    const token = req.query.token;
    const userController = new controller_1.UserController();
    userController.verify(token, (data) => {
        res.send(data);
    });
});
userRouter.post(config_1.default.routes.user.login, (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userController = new controller_1.UserController();
    userController.login(email, password, (data) => {
        const token = data.data.token;
        res.cookie('token', token, { httpOnly: true });
        res.send(data);
    });
});
exports.default = userRouter;
