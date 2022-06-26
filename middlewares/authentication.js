const { User } = require('../models');
const { verifyToken } = require('../helpers/tokenHandler');

module.exports = async (req, res, next) => {
    try {
        const { access_token } = req.cookies;
        
        if (access_token) {
            const decodedData = await verifyToken(access_token);
            const username = decodedData.username;

            const findUser = await User.findOne({ where: {username} });
            if (!findUser) return res.status(404).json({ message: 'Access Token is invalid' });

            req.user = decodedData;
            
            next();
        } else {
            return res.status(404).json({ message: 'Access Token is unavailable' });
        }
    } catch (error) {
        next(error);   
    }
}