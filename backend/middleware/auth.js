const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized, no token provided' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // { id, role, type }
        next();
    } catch (error) {
        const message = error.name === 'TokenExpiredError'
            ? 'Session expired, please log in again'
            : 'Unauthorized, invalid token';
        return res.status(401).json({ error: message });
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Forbidden, insufficient permissions' });
        }
        next();
    };
};

const authenticateUser = (req, res, next) => {
    authenticate(req, res, () => {
        if (req.user.type !== 'user') {
            return res.status(403).json({ error: 'Forbidden, users only' });
        }
        next();
    });
};

const authenticateAdmin = (req, res, next) => {
    authenticate(req, res, () => {
        if (req.user.type !== 'admin') {
            return res.status(403).json({ error: 'Forbidden, admins only' });
        }
        next();
    });
};

const optionalAuthenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next();
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.type === 'user') {
            req.user = decoded;
        }
    } catch {
        // Ignore invalid tokens for public routes
    }
    next();
};

module.exports = {
    authenticate,
    authorize,
    authenticateUser,
    authenticateAdmin,
    optionalAuthenticateUser
};
