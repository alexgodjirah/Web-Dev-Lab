const userRouter = require('express').Router();

userRouter.get('/', async (req, res) => {
    await res.json('hello from api/v1/user')
})

module.exports = userRouter;