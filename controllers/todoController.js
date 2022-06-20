const { Todo } = require('../models');
const { hashPassword, verifyPassword } = require('../helpers/passwordHandler');
const { generateToken, verifyToken } = require('../helpers/tokenHandler');

class TodoController {
    static create = async (req, res) => {
        try {
            const { id } = req.user.id;
            const { title, date, status } = req.body;
            
            const todoPayload = {
                title: title,
                date: date,
                status: status,
                UserId: id
            }

            const createTodo = await Todo.create(todoPayload);
            if (createTodo) {
                res.status(201).json({ message: 'Todo Created' });
            } else {
                res.status(400).json({ message: 'Bad Request' });
            }
        } catch (error) {
            console.log(error);
        }
    };

    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            
            const deleteTodo = await Todo.destroy({ where: { id } });
            if (deleteTodo) {
                res.status(200).json('To Do Deleted')
            }
        } catch (error) {
            console.log(error);
        }
    }
}