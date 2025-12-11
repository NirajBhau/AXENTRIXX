import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled', 'rescheduled'],
    default: 'scheduled'
  },
  meetingLink: {
    type: String
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
consultationSchema.index({ email: 1 });
consultationSchema.index({ date: 1 });
consultationSchema.index({ status: 1 });
consultationSchema.index({ createdAt: -1 });

export default mongoose.model('Consultation', consultationSchema);
