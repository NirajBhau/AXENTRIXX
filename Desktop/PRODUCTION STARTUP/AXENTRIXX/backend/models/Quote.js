import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  projectType: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  timeline: {
    type: String,
    required: true
  },
  projectDetails: {
    type: String,
    required: true
  },
  additionalServices: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['pending', 'quoted', 'accepted', 'rejected', 'in-progress', 'completed'],
    default: 'pending'
  },
  quotedAmount: {
    type: Number
  },
  quoteSentDate: {
    type: Date
  },
  emailSent: {
    type: Boolean,
    default: false
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

// Indexes
quoteSchema.index({ email: 1 });
quoteSchema.index({ status: 1 });
quoteSchema.index({ projectType: 1 });
quoteSchema.index({ createdAt: -1 });

export default mongoose.model('Quote', quoteSchema);
