const v1 = require('express').Router();

v1.get('/', async(req, res) => {
    res.json('hello from api/v1')
})

v1.use()

module.exports = v1