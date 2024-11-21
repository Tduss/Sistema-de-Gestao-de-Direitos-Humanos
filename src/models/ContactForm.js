// models/ContactForm.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactFormSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  content: String,
  age: Number,
  marital_status: String,
  gender: String,
  province: String,
  phone: String,
  email: String,
  files: [String], // Array to store file paths or file names
  createdAt: { type: Date, default: Date.now },
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
