import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendEmail, emailTemplates } from '../config/email.js';
import Consultation from '../models/Consultation.js';

const router = express.Router();

// Validation rules
const consultationValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('date').notEmpty().withMessage('Date is required'),
  body('time').notEmpty().withMessage('Time is required'),
  body('projectDescription').trim().notEmpty().withMessage('Project description is required'),
];

// POST /api/book-consultation
router.post('/', consultationValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, company, date, time, projectDescription } = req.body;

    // Validate date is in the future
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return res.status(400).json({ error: 'Date must be in the future' });
    }

    // Save to database
    const consultation = new Consultation({
      name,
      email,
      phone,
      company,
      date: selectedDate,
      time,
      projectDescription
    });

    const savedConsultation = await consultation.save();

    // Send confirmation email to client
    const clientEmail = emailTemplates.consultationConfirmation({
      name,
      date,
      time,
      projectDescription
    });
    const clientEmailResult = await sendEmail(email, clientEmail.subject, clientEmail.html);

    // Send notification to team
    const teamEmail = emailTemplates.teamNotification('consultation', {
      name,
      email,
      phone,
      company,
      date,
      time,
      projectDescription
    });
    await sendEmail(
      process.env.TEAM_EMAIL,
      teamEmail.subject,
      teamEmail.html
    );

    // Update email sent status
    if (clientEmailResult.success) {
      savedConsultation.emailSent = true;
      await savedConsultation.save();
    }

    res.json({
      success: true,
      message: 'Consultation booked successfully! Check your email for confirmation.',
      booking: { date, time, name },
      id: savedConsultation._id
    });
  } catch (error) {
    console.error('Consultation booking error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
