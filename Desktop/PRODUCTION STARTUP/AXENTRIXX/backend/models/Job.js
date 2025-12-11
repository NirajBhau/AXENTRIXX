import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  workMode: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    default: 'Full-time'
  },
  salary: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  responsibilities: [{
    type: String,
    trim: true
  }],
  qualifications: [{
    type: String,
    trim: true
  }],
  niceToHave: [{
    type: String,
    trim: true
  }],
  benefits: [{
    type: String,
    trim: true
  }],
  active: {
    type: Boolean,
    default: true
  },
  applicationsCount: {
    type: Number,
    default: 0
  },
  postedDate: {
    type: Date,
    default: Date.now
  },
  closingDate: {
    type: Date
  }
}, {
  timestamps: true
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
