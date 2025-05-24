import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BabysitterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: { // Corresponds to 'sdt' in your diagram
    type: String,
    required: true,
    unique: true, // Assuming phone numbers for babysitters are unique
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Assuming emails for babysitters are unique
    trim: true,
    lowercase: true
  },
  certificate: { // Corresponds to 'chứng chỉ'
    type: String,
    required: false, // Make this optional if not all babysitters have one immediately
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Babysitter', BabysitterSchema);