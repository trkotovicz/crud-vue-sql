require('express-async-errors');
const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/error');

const app = express();
app.use(express.static('public'));

app.use(express.json());
app.use(cors());


app.use(errorMiddleware);

module.exports = app;