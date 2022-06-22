const todoRouter = require('express').Router();

todoRouter.get('/', (req, res) => {
    res.json('hello from todo')
})

module.exports = todoRouter;