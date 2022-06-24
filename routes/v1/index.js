const v1 = require('express').Router();
const userRouter = require('./user');
const todoRouter = require('./todo');
const AuthController = require('../../controllers/authController');

v1.get('/', (req, res) => {
    res.json('hello from /v1')
});

v1.post('/register', AuthController.register);
v1.post('/login', AuthController.login);

v1.use('/todo', todoRouter);
v1.use('/user', userRouter);


module.exports = v1;