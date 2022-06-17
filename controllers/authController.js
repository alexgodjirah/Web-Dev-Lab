const { User } = require('../models');
const { hashPassword, verifyPassword } = require('../helpers/passwordHandler');
const { generateToken } = require('../helpers/tokenHandler');

class AuthController {
    static register = async (req, res) => {
        try {
            const { username, email, password, role } = req.body;
    
            const isEmailExist = await User.findOne({ where: { email: email } });
            if (isEmailExist) res.status(409).json({ message: 'Email is not available' });
    
            const isUsernameExist = await User.findOne({ where: { username: username } });
            if (isUsernameExist) res.status(409).json({ message: 'Usermame is not available' });
    
            const userPayload = {
                username: username,
                email: email,
                password: hashPassword(password),
                role: role
            };
    
            // create() method is a combination of build() --which used to create an instance-- and save() --which used to save or upload the instance to the databse-- methods.
            const createUser = await User.create(userPayload);
            if (createUser) {
                res.status(201).json({ message: 'User is created'});
                res.redirect('/')
            } else {
                res.status(400).json({ message: 'Bad request' });
            }
    
            // Cookies
            const access_token = await generateToken({
                id: createUser.id,
                username: createUser.username,
                role: createUser.role
            });
    
            res.cookie('access_token', access_token, {
                httpOnly: true
            });
        } catch (error) {
            console.log(error);
        }
    };

    static login = async (req, res) => {
        try {
            const { username, password } = req.body;

            const loginUser = await User.findOne({ where: {username: username} });

            const isPasswordMatch = await verifyPassword(password, loginUser.password);
            if (!isPasswordMatch) {return res.status(409).json({ message: 'Wrong password' })};

            // Cookie
            const access_token = await generateToken({
                id: loginUser.id,
                username: loginUser.loginUser,
                role: loginUser.role
            });

            res.cookie('access_token', access_token, {
                httpOnly: true
            });

            res.redirect('/');
            return res.status(200).json({ message: 'Welcome' });
        } catch (error) {
            console.log(error);
        }
    };

    static delete = async (req, res) => {
        try {
            const { id } = req.params;

            const deleteUser = await User.destroy({ where: { id: id } });
            if (deleteUser) res.status(410).json('Deleted');
        } catch (error) {
            console.log(error);
        }
    };
}

module.exports = AuthController;