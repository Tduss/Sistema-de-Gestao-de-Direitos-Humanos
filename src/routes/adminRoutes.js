// routes/adminRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { isAdmin } = require('../middlewares/auth');

const router = express.Router();

// Route to add a normal user (only accessible to admins)
router.post('/add-user', isAdmin, async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword, role: 'normal' });
  await user.save();
  res.status(201).json({ message: 'User created successfully' });
});

module.exports = router;
