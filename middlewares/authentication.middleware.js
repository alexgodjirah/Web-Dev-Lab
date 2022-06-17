const { User } = require('../models');
const { verifyToken } = require('../helpers/tokenHandler');

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.cookies;
        if (access_token) {
            const decodeData = await verifyToken(access_token);
            
            const findUser = await User.findOne({ 
                where: {
                    id: decodeData.id
                }
            });
            if (!findUser) res.status(404).json({ message: 'User no found' });
            
            req.user = decodeData;

            next();
        } else {
            res.status(404).json({ message: 'Access Token is invalid' });
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = authentication;