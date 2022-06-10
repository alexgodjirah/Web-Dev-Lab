const todoRouter = require('express').Router();

todoRouter.get('/', async (req, res) => {
    return await res.json('hello from api/v1/todoRouter')
})

module.exports = todoRouter