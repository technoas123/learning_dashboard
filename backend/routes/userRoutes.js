
const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

// @route   GET /api/users/protected
// @desc    Test protected route (any logged-in user)
router.get('/protected', protect, (req, res) => {
  res.json({ message: 'Access granted to protected route', user: req.user });
});

// @route   GET /api/users/admin
// @desc    Test admin-only route
router.get('/admin', protect, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Access granted to admin route', user: req.user });
});

module.exports = router;
