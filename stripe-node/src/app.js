const express = require('express');
const cors = require('cors');
const { paymentRoute } = require('./route');
const app = express();
app.use('/api/', paymentRoute);
app.use(express.json());
app.use(cors());
module.exports = app;
