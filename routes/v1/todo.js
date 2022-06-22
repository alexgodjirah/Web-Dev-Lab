const TodoController = require('../../controllers/todoController');

const todoRouter = require('express').Router();

todoRouter.get('/', async (req, res) => {
    return res.json('hello from api/v1/todoRouter')
})

todoRouter.post('/create', TodoController.create);
todoRouter.delete('/delete/:id', TodoController.delete);

module.exports = todoRouter