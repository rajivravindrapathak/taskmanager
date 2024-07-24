const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = authMiddleware;
