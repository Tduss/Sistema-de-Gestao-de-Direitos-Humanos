// middlewares/auth.js

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      return next();
    }
    return res.status(403).json({ message: 'Permission Denied: Admins only' });
  };
  
  // Middleware to check if the user is the owner of the data
  const isOwner = (req, res, next) => {
    if (req.user && req.user.id === req.params.userId) {
      return next();
    }
    return res.status(403).json({ message: 'Permission Denied: You are not the owner' });
  };
  
  module.exports = { isAdmin, isOwner };
  