const AuthController = require('../../controllers/authController');

const userRouter = require('express').Router();

userRouter.get('/', async (req, res) => {
    await res.json('hello from api/v1/user')
})

userRouter.post('/register', AuthController.register);
userRouter.post('/login', AuthController.login);
userRouter.delete('/delete/:id', AuthController.delete);

module.exports = userRouter;