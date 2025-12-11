import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendEmail, emailTemplates } from '../config/email.js';
import Quote from '../models/Quote.js';

const router = express.Router();

// Validation rules
const quoteValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('projectType').notEmpty().withMessage('Project type is required'),
  body('budget').notEmpty().withMessage('Budget is required'),
  body('timeline').notEmpty().withMessage('Timeline is required'),
  body('projectDetails').trim().notEmpty().withMessage('Project details are required'),
];

// POST /api/request-quote
router.post('/', quoteValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      projectDetails,
      additionalServices
    } = req.body;

    // Save to database
    const quote = new Quote({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      projectDetails,
      additionalServices: additionalServices || []
    });

    const savedQuote = await quote.save();

    // Send confirmation email to client
    const clientEmail = emailTemplates.quoteConfirmation({
      name,
      projectType,
      budget,
      timeline,
      additionalServices
    });
    const clientEmailResult = await sendEmail(email, clientEmail.subject, clientEmail.html);

    // Send notification to sales team
    const teamEmail = emailTemplates.teamNotification('quote', {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      projectDetails,
      additionalServices
    });
    await sendEmail(
      process.env.SALES_EMAIL,
      teamEmail.subject,
      teamEmail.html
    );

    // Update email sent status
    if (clientEmailResult.success) {
      savedQuote.emailSent = true;
      await savedQuote.save();
    }

    res.json({
      success: true,
      message: 'Quote request submitted successfully! We\'ll send you a detailed quote within 24 hours.',
      request: { projectType, budget, timeline, name },
      id: savedQuote._id
    });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
