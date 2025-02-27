const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const requestLoggerMiddleware = require('./middlewares/request-logger.middleware');

const app = express();

//
app.use(requestLoggerMiddleware);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//

module.exports = app;
