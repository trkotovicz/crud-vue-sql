require('express-async-errors');
const express = require('express');
const cors = require('cors');
// const errorMiddleware = require('../middlewares/error');
const userRouter = require('../routers/User');
const clientRouter = require('../routers/Client');

const app = express();
app.use(express.static('public'));

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(userRouter);
app.use(clientRouter);

// app.use(errorMiddleware);

module.exports = app;
