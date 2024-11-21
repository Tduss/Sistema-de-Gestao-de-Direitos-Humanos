// routes/contactFormRoutes.js
const express = require('express');
const ContactForm = require('../models/ContactForm');
const { isAdmin, isOwner } = require('../middlewares/auth');

const router = express.Router();

// Route to get all submissions (admin only)
router.get('/all-submissions', isAdmin, async (req, res) => {
  const submissions = await ContactForm.find();
  res.json(submissions);
});

// Route to get submissions for a normal user
router.get('/my-submissions', isOwner, async (req, res) => {
  const submissions = await ContactForm.find({ user_id: req.user.id });
  res.json(submissions);
});

// Route to create a new contact form submission
router.post('/submit-form', async (req, res) => {
  const { title, content, age, marital_status, gender, province, phone, email, files } = req.body;
  const contactForm = new ContactForm({
    user_id: req.user.id,
    title,
    content,
    age,
    marital_status,
    gender,
    province,
    phone,
    email,
    files,
  });
  await contactForm.save();
  res.status(201).json({ message: 'Form submitted successfully' });
});

module.exports = router;

