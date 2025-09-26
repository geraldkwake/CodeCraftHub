const jwt = require('jsonwebtoken');

// Middleware for authentication
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Access denied. No token provided.');
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid token.');
    req.user = user;
    next();
  });
};

module.exports = authMiddleware;