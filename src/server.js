// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/adminRoutes');
const contactFormRoutes = require('./routes/contactFormRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/admin', userRoutes);
app.use('/contact', contactFormRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
