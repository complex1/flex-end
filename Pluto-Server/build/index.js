"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express"));
// Database connection
const db_1 = __importDefault(require("./plugin/db"));
(0, db_1.default)();
const app = (0, express_1.default)();
// parse application/x-www-form-urlencoded
// parse application/json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Add all routes
const userRouter_1 = __importDefault(require("./routers/userRouter"));
app.use(config_1.default.routes.basePath, userRouter_1.default);
const port = config_1.default.port || 3000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
