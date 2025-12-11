import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendEmail, emailTemplates } from '../config/email.js';
import multer from 'multer';

const router = express.Router();

// Configure multer for memory storage (files stored in memory, not disk)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only PDF and DOC files
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and DOC/DOCX files are allowed'));
    }
  }
});

// Validation rules
const careerValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('position').notEmpty().withMessage('Position is required'),
  body('introduction').trim().notEmpty().withMessage('Introduction is required'),
];

// POST /api/careers/apply
router.post('/apply', upload.single('resume'), careerValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      fullName,
      email,
      phone,
      position,
      linkedin,
      portfolio,
      introduction
    } = req.body;

    // Get uploaded file
    const resumeFile = req.file;

    // Send confirmation email to applicant
    const clientEmail = emailTemplates.careerConfirmation({
      fullName,
      position
    });
    await sendEmail(email, clientEmail.subject, clientEmail.html);

    // Send notification to HR team with resume attachment
    const teamEmail = emailTemplates.teamNotification('career', {
      fullName,
      email,
      phone,
      position,
      linkedin,
      portfolio,
      introduction
    });

    // Prepare attachment if resume was uploaded
    const attachments = resumeFile ? [{
      filename: resumeFile.originalname,
      content: resumeFile.buffer
    }] : [];

    await sendEmail(
      process.env.HR_EMAIL || 'hr@axentrixx.com',
      teamEmail.subject,
      teamEmail.html,
      attachments
    );

    res.json({
      success: true,
      message: 'Application submitted successfully! We\'ll review your application and get back to you within 3-5 business days.'
    });
  } catch (error) {
    console.error('Career application error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit application. Please try again.'
    });
  }
});

export default router;
