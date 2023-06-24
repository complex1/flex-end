import config from './config';

import express, { Express } from 'express';

// Database connection
import dbConnect from './plugin/db';
dbConnect();


const app: Express = express();

// parse application/x-www-form-urlencoded
// parse application/json
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());

// Add all routes
import userRouter from './routers/userRouter';
app.use(config.routes.basePath, userRouter);

const port = config.port || 3000;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});