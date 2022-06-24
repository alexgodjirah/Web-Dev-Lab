const { User } = require('../models');
const { verifyToken } = require('../helpers/tokenHandler');

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.cookies;
        
        if (access_token) {
            const decodeData = await verifyToken(access_token);
            const id = decodeData.id;
            
            const findUser = await User.findOne({ where: {id} });
            if (!findUser) res.status(404).json({ message: 'Access Token is invalid' });
            
            req.user = decodeData;

            next();
        } else {
            res.status(404).json({ message: 'Access Token is Unavailable' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { authentication };