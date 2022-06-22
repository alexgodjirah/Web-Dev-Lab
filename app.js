const express = require('express');
const app = express.Router();


// Utilities
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Middlewares
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


module.exports = app;