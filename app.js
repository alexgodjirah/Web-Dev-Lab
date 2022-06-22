const express = require('express');
const app = express();
const routes = require('./routes');

// Utilities
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Middlewares
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

module.exports = app;