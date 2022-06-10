const todoRouter = require('./todos');
const userRouter = require('./users');

const v1 = require('express').Router();

v1.get('/', async(req, res) => {
    await res.json('hello from api/v1')
})

v1.use('/users', userRouter);
v1.use('/todos', todoRouter);

module.exports = v1