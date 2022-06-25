const { User } = require('../models');
const { hashPassword, verifyPassword } = require('../helpers/passwordHandler');
const { generateToken, verifyToken } = require('../helpers/tokenHandler');

class AuthController {
    static register = async (req, res) => {
        try {
            const { username, email, password, confirm_password, role } = req.body;
    
            const isUsernameExist = await User.findOne({ where: {username} });
            if (isUsernameExist) return res.status(409).json({ message: 'Username is not available' });
    
            const isEmailExist = await User.findOne({ where: {email} });
            if (isEmailExist) return res.status(409).json({ message: 'Email is not available' });
    
            if (password !== confirm_password) {
                res.status(406).json({ message: 'Passwords do not match' });
                return false;
            } else {
                const userPayload = {
                    username: username,
                    email: email,
                    password: hashPassword(password),
                    role: role
                }
    
                const createUser = await User.create(userPayload);
    
                // Cookies
                const access_token = await generateToken({
                    id: createUser.id,
                    username: createUser.username,
                    role: createUser.role
                })
    
                res.cookie('access_token', access_token, {
                    httpOnly: true
                })
    
                return res.status(201).json({ message: `User is Created, ${access_token}` });
            }
        } catch (error) {
            console.log(error);
        }
    }

    static login = async (req, res) => {
        try {
            const { username, password } = req.body;

            const loginUser = await User.findOne({ where: {username} });
            if (!loginUser) return res.status(404).json({ message: 'User is not found' });
            
            const isPasswordMatch = verifyPassword(password, loginUser.password);
            if (!isPasswordMatch) return res.status(409).json({ message: 'Password is wrong' });

            // Cookie
            const access_token = await generateToken({
                id: loginUser.id,
                username: loginUser.username,
                role: loginUser.role
            })

            res.cookie('access_token', access_token, {
                httpOnly: true
            })

            return res.status(200).json({ message: `Welcome, ${loginUser.username}, ${access_token}` });
        } catch (error) {
            console.log(error);
        }
    }

    static delete = async (req, res) => {
        try {
            const { id } = req.user.id;

            const deleteUser = await User.destroy({ where: {id} });
            if (deleteUser) return res.status(200).json({ message: 'User is deleted' });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AuthController;