const AuthController = require('../../controllers/authController');
const UpdateController = require('../../controllers/updateController');

const userRouter = require('express').Router();

userRouter.get('/', async (req, res) => {
    await res.json('hello from api/v1/user')
})

userRouter.post('/register', AuthController.register);
userRouter.post('/login', AuthController.login);
userRouter.delete('/delete/:id', AuthController.delete);

userRouter.put('/update/username/:id', UpdateController.updateUsername);
userRouter.put('/update/email/:id', UpdateController.updateEmail);
userRouter.put('/update/password/:id', UpdateController.updatePassword);
userRouter.put('/update/role/:id', UpdateController.updateRole);

module.exports = userRouter;