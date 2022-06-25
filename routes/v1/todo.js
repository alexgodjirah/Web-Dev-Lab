const TodoController = require('../../controllers/todoController');

const todoRouter = require('express').Router();

todoRouter.get('/', TodoController.seeTodo);

todoRouter.post('/create', TodoController.create);

todoRouter.put('/update/title/:id', TodoController.updateTitle);
todoRouter.put('/update/date/:id', TodoController.updateDate);
todoRouter.put('/update/status/:id', TodoController.updateStatus);

todoRouter.delete('/delete/:id', TodoController.delete);

module.exports = todoRouter;