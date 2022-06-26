const v1 = require('express').Router();
const userRouter = require('./user');
const todoRouter = require('./todo');
const AuthController = require('../../controllers/authController');
const authentication = require('../../middlewares/authentication');
const validatorHandler = require('../../middlewares/validation.joi');
const { RegisterSchema } = require('../../validations');

v1.get('/', (req, res) => {
    res.json('hello from /v1')
});

v1.post('/register', validatorHandler(RegisterSchema, 'body'), AuthController.register);
v1.post('/login', AuthController.login);

v1.use(authentication);
v1.use('/user', userRouter);
v1.use('/todo', todoRouter);


module.exports = v1;