const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, // This is how you reference another document's _id
    ref: 'User', // Refers to the 'User' model
    required: true
  },
  babysitterId: {
    type: Schema.Types.ObjectId,
    ref: 'Babysitter', // Refers to the 'Babysitter' model
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  cost: {
    type: Number,
    required: true,
    min: 0 // Cost should not be negative
  },
  bookingEmail: { // Corresponds to 'email người đặt'
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  bookingPhoneNumber: { // Corresponds to 'số điện thoại người đặt'
    type: String,
    required: true,
    trim: true
  },
  bookingName: { // Corresponds to 'tên người đặt'
    type: String,
    required: true,
    trim: true
  },
  additionalRequest: { // Corresponds to 'yêu cầu thêm'
    type: String,
    default: '', // Provide a default empty string
    trim: true
  },
  address: { // Corresponds to 'địa chỉ'
    type: String,
    required: true,
    trim: true
  },
  status: { // Corresponds to 'trạng thái xử lý'
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'cancelled'], // Define possible statuses
    default: 'pending' // Initial status
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Appointment', AppointmentSchema);