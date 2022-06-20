const { User } = require('../models');
const { hashPassword, verifyPassword } = require('../helpers/passwordHandler');
const { generateToken, verifyToken } = require('../helpers/tokenHandler');

class UpdateController {
    static updateUsername = async (req, res) => {
        try {
            const { id } = req.user.id;
            const { username } = req.body;
    
            const userPayload = {
                username: username
            };

            const updateUsername = await User.update(userPayload, { where: {id: id} });

            if (updateUsername) {
                res.status(200).json({ message: 'Username update is successful' });
            } else {
                res.status(405).json({ message: 'Username update is failed' });
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    static updateEmail = async (req, res) => {
        try {
            const { id } = req.user.id;
            const { email } = req.body;

            const emailPayload = {
                email: email
            };

            const updateEmail = await User.update(emailPayload, { where: {id} });
            if (updateEmail) {
                res.status(200).json({ message: 'Email update is successful' });
            } else {
                res.status(405).json({ message: 'Email update is failed' });
            }
        } catch (error) {
            console.log(error);
        }
    };

    static updatePassword = async (req, res) => {
        try {
            const { id } = req.user.id;
            const { password } = req.body;

            const passwordPayload = {
                password: hashPassword(password)
            };

            const updatePassword = await User.update(passwordPayload, { where: {id} });
            if (updatePassword) {
                res.status(200).json({ message: 'Password update is successful' });
            } else {
                res.status(405).json({ message: 'Password update is failed' });
            }
        } catch (error) {
            console.log(error);
        }
    };

    static updateRole = async (req, res) => {
        try {
            const { id } = req.user.id;
            const { role } = req.body;

            const rolePayload = {
                role: role
            };

            const updateRole = await User.update(rolePayload, { where: {id} });
            if (updateRole) {
                res.status(200).json({ message: 'Role update is successful' })
            } else {
                res.status(405).json({ message: 'Role update is failed' });
            }
        } catch (error) {
            console.log(error);
        }
    };
}

module.exports = UpdateController;