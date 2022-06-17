const { User } = require('../models');
const { verifyToken } = require('../helpers/tokenHandler');

const authorization = async (req, res, next) => {
    try {
        const { access_token } = req.cookies;
        if (access_token) {
            const decodeData = await verifyToken(access_token);

            const findUser = await User.findOne({
                where: {
                    id: decodeData.id
                }
            });
            
            req.user = decodeData;

            if (req.user.role === 'user') {
                res.json('You are not supposed to be here, homie');
            }
        } else {
            res.status(404).json({ message: 'Access Token is invalid' });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = authorization;