const { User } = require('../models');
const { hashPassword, verifyPassword } = require('../helpers/passwordHandler');
const { generateToken, verifyToken } = require('../helpers/tokenHandler');

class userUpdateController {
    static username = async (req, res) => {
        try {
            const id = req.user.id;
            const { username } = req.body;

            const userPayload = {
                username: username
            };

            const updateUsername = await User.update(userPayload, {where: {id}});
            if (updateUsername) {
                return res.status(200).json({ message: `Username update is successful, Hello Again ${username}` });
            } else {
                return res.status(400).json({ message: 'Username update is failed' });
            }
        } catch (error) {
            console.log(error);
        }
    }

    static email = async (req, res) => {
        try {
            const id = req.user.id;
            const { email } = req.body;
    
            const userPayload = {
                email: email
            };
    
            const updateEmail = await User.update(userPayload, { where: {id}})
            if (updateEmail) {
                return res.status(200).json({ message: `Email update is successful, Your new email: ${email}` });
            } else {
                return res.status(400).json({ message: 'Email update is failed' });
            }
        } catch (error) {
            console.log(error);
        }
    }

    static password = async (req, res) => {
        try {
            const id = req.user.id;
            const { password, confirm_password } = req.body;
            
            
            if (password !== confirm_password) {
                return res.status(406).json({ message: 'Password does not match'})
            } else {
                const userPayload = {
                    password: hashPassword(password)
                }

                const updatePassword = await User.update(userPayload, { where: {id} });
                if (updatePassword) {
                    return res.status(200).json({ message: 'Password update is successful'})
                } else {
                    return res.status(400).json({ message: 'Password update is failed' });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = userUpdateController;