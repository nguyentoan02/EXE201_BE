const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
    trim: true    // Remove whitespace from both ends of a string
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
    trim: true,
    lowercase: true // Store emails in lowercase
  },
  phonenumber: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'], // Restrict role to these values
    default: 'user' // Default role for new users
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps automatically
});



module.exports = mongoose.model('User', UserSchema);