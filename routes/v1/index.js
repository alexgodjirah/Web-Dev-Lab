const todoRouter = require('./todo');
const userRouter = require('./user');

const v1 = require('express').Router();

v1.get('/', async(req, res) => {
    await res.json('hello from api/v1')
})

v1.use('/user', userRouter);
v1.use('/todo', todoRouter);

module.exports = v1