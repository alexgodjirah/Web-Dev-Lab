const v1 = require('express').Router();
const userRouter = require('./user');
const todoRouter = require('./todo');

v1.get('/', (req, res) => {
    res.json('hello from /v1')
});

v1.post('/register');
v1.post('/login');

v1.use('/todo', todoRouter);
v1.use('/user', userRouter);


module.exports = v1;