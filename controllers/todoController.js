const { User } = require('../models');
const { Todo } = require('../models');
const { verifyToken } = require('../helpers/tokenHandler');

class TodoController {
    static seeTodo = async (req, res) => {
        try {
            const id = req.user.id;

            const getTodo = await Todo.findAll({ where: {UserId: id} });
            
            return res.status(200).json(getTodo);
        } catch (error) {
            console.log(error);
        }
    }
    
    static create = async (req, res) => {
        try {
            const id = req.user.id;
            const { title, date, status } = req.body;
    
            const todoPayload = {
                title: title,
                date: date,
                status: status,
                UserId: id
            };
    
            const createTodo = await Todo.create(todoPayload);
            if (createTodo) {
                return res.status(201).json({ message: `Todo Created: ${title}, ${date}, ${status}` });
            } else {
                return res.status(400).json({ message: 'Bad Request' });
            }
        } catch (error) {
            console.log(error);
        }
    }

    static updateTitle = async (req, res) => {
        try {
            const id = req.params.id;
            const { title } = req.body;

            const todoPayload = {
                ttle: title
            }

            const updateTitle = await Todo.update(todoPayload, { where: {id} });
            if (updateTitle) {
                return res.status(200).json({ message: 'Title Update is Successful' });
            } else {
                return res.status(400).json({ message: 'Title update id failed' });
            }
        } catch (error) {
            console.log(error);
        }
    }

    static updateDate = async (req, res) => {
        try {
            const id = req.params.id;
            const { date } = req.body;

            const todoPayload = {
                date: date
            };

            const updateDate = await Todo.update(todoPayload, { where: {id} });
            if (updateDate) {
                return res.status(200).json({ message: 'Date update is successful' });
            } else {
                return res.status(400).json({ message: 'Date update is failed' });
            }
        } catch (error) {
            console.log(error);
        }
    }

    static updateStatus = async (req, res) => {
        try {
            const id = req.params.id;
            const { status } = req.body;

            const todoPayload = {
                status: status
            };

            const updateStatus = await Todo.update(todoPayload, { where: {id} });
            if (updateStatus) {
                return res.status(200).json({ message: 'Status update is successful' });
            } else {
                return res.status(400).json({ message: 'Status update is failed' });
            }
        } catch (error) {
            console.log(error)
        }
    }

    static delete = async (req, res) => {
        try {
            const id = req.params.id;
    
            const deleteTodo = await Todo.destroy({ where: {id} });
            if (deleteTodo) return res.status(200).json({ message: 'Todo is deleted' });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TodoController;