const v1 = require('express').Router();

v1.get('/', (req, res) => {
    res.json('hello from /v1')
});

module.exports = v1;