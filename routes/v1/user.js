const AuthController = require('../../controllers/authController');
const userUpdateController = require('../../controllers/userUpdateController');

const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
    res.json('hello from user')
})

userRouter.delete('/delete/:id', AuthController.delete);

userRouter.put('/update/username/:id', userUpdateController.username);
userRouter.put('/update/email/:id', userUpdateController.email);
userRouter.put('/update/password/:id', userUpdateController.password);

module.exports = userRouter;