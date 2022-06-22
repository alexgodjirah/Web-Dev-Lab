const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
    res.json('hello from user')
})

module.exports = userRouter;