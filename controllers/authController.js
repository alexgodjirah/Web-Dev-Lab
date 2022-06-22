const { User } = require('../models');
const { hashPassword, verifyPassword } = require('../helpers/passwordHandler');
const { generateToken } = require('../helpers/tokenHandler');

class AuthController {
    static register = async (req, res) => {
        try {
            const { username, email, password, confirm_password, role } = req.body;
    
            const isEmailExist = await User.findOne({ where: { email: email } });
            if (isEmailExist) res.status(409).json({ message: 'Email is not available' });
    
            const isUsernameExist = await User.findOne({ where: { username: username } });
            if (isUsernameExist) res.status(409).json({ message: 'Usermame is not available' });
    
            if (password !== confirm_password) {
                res.status(406).json('Password do not match')
                return false;
            } else {
                const userPayload = {
                    username: username,
                    email: email,
                    password: hashPassword(password),
                    role: role
                };
        
                // create() method is a combination of build() --which used to create an instance-- and save() --which used to save or upload the instance to the databse-- methods.
                const createUser = await User.create(userPayload);
                // if (createUser) {
                //     res.status(201).json({ message: 'User is created'});
                // } else {
                //     res.status(400).json({ message: 'Bad request' });
                // }
        
                // Cookies
                const access_token = await generateToken({
                    id: createUser.id,
                    username: createUser.username,
                    role: createUser.role
                });
                
                res.cookie('id', createUser.id, {
                    httpOnly: true
                })
                
                res.cookie('access_token', access_token, {
                    httpOnly: true
                });
    
                return res.status(201).json({ message: `User is Created, ${access_token}` });
            }

        } catch (error) {
            console.log(error);
        }
    };

    static login = async (req, res) => {
        try {
            const { username, password } = req.body;

            const loginUser = await User.findOne({ where: {username: username} });

            const isPasswordMatch = verifyPassword(password, loginUser.password);
            if (!isPasswordMatch) {return res.status(409).json({ message: 'Wrong password' })};

            // Cookie
            const access_token = await generateToken({
                id: loginUser.id,
                username: loginUser.username,
                role: loginUser.role
            });

            res.cookie('id', loginUser.id, {
                httpOnly: true
            })

            res.cookie('access_token', access_token, {
                httpOnly: true
            });

            return res.status(200).json({ message: `Welcome, ${access_token}` });
        } catch (error) {
            console.log(error);
        }
    };

    static delete = async (req, res) => {
        try {
            const { id } = req.user.id;

            const deleteUser = await User.destroy({ where: { id: id } });
            if (deleteUser) res.status(200).json('User Deleted');
        } catch (error) {
            console.log(error);
        }
    };
}

module.exports = AuthController;