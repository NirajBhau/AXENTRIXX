import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendEmail, emailTemplates } from '../config/email.js';
import Contact from '../models/Contact.js';

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('service').notEmpty().withMessage('Service is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

// POST /api/contact
router.post('/', contactValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, company, service, message } = req.body;

    // Save to database
    const contact = new Contact({
      name,
      email,
      phone,
      company,
      service,
      message
    });

    const savedContact = await contact.save();

    // Send confirmation email to client
    const clientEmail = emailTemplates.contactConfirmation({
      name,
      service,
      message
    });
    const clientEmailResult = await sendEmail(email, clientEmail.subject, clientEmail.html);

    // Send notification to team
    const teamEmail = emailTemplates.teamNotification('contact', {
      name,
      email,
      phone,
      company,
      service,
      message
    });
    await sendEmail(
      process.env.CONTACT_EMAIL,
      teamEmail.subject,
      teamEmail.html
    );

    // Update email sent status
    if (clientEmailResult.success) {
      savedContact.emailSent = true;
      await savedContact.save();
    }

    res.json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 2 hours.',
      id: savedContact._id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
