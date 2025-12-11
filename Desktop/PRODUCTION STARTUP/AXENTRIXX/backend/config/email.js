import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create reusable transporter
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration
export const verifyEmailConnection = async () => {
  try {
    await transporter.verify();
    console.log('✅ Email server is ready to send messages');
    return true;
  } catch (error) {
    console.error('❌ Email server connection failed:', error.message);
    return false;
  }
};

// Email templates
export const emailTemplates = {
  // Contact form confirmation
  contactConfirmation: (data) => ({
    subject: 'Thank You for Contacting Axentrixx',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 30px; background: #2563EB; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Reaching Out!</h1>
          </div>
          <div class="content">
            <p>Hi ${data.name},</p>
            <p>Thank you for contacting Axentrixx. We've received your message and our team will get back to you within 2 hours during business hours.</p>
            
            <h3>Your Message Details:</h3>
            <p><strong>Service Interest:</strong> ${data.service}</p>
            <p><strong>Message:</strong> ${data.message}</p>
            
            <p>If you have any urgent questions, feel free to call us at ${process.env.COMPANY_PHONE}</p>
            
            <a href="${process.env.FRONTEND_URL}" class="button">Visit Our Website</a>
            
            <p>Best regards,<br>The Axentrixx Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Axentrixx. All rights reserved.</p>
            <p>${process.env.COMPANY_ADDRESS}</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  // Consultation booking confirmation
  consultationConfirmation: (data) => ({
    subject: 'Consultation Confirmed - Axentrixx',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; border-left: 4px solid #2563EB; margin: 20px 0; border-radius: 5px; }
          .button { display: inline-block; padding: 12px 30px; background: #2563EB; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Consultation Confirmed!</h1>
          </div>
          <div class="content">
            <p>Hi ${data.name},</p>
            <p>Thank you for booking a consultation with Axentrixx!</p>
            
            <div class="info-box">
              <h3>📅 Your Consultation Details:</h3>
              <p><strong>Date:</strong> ${data.date}</p>
              <p><strong>Time:</strong> ${data.time}</p>
              <p><strong>Duration:</strong> 30 minutes</p>
            </div>
            
            <h3>What We'll Discuss:</h3>
            <p>${data.projectDescription}</p>
            
            <h3>What's Next:</h3>
            <ul>
              <li>We'll send you a video meeting link 24 hours before your scheduled time</li>
              <li>Our team will review your project description</li>
              <li>Prepare any questions or materials you'd like to discuss</li>
            </ul>
            
            <p><strong>Need to reschedule?</strong> Reply to this email or call us at ${process.env.COMPANY_PHONE}</p>
            
            <p>We look forward to speaking with you!</p>
            
            <p>Best regards,<br>The Axentrixx Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Axentrixx. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  // Quote request confirmation
  quoteConfirmation: (data) => ({
    subject: 'Quote Request Received - Axentrixx',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; border-left: 4px solid #2563EB; margin: 20px 0; border-radius: 5px; }
          .timeline { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
          .timeline-item { padding: 10px 0; border-left: 2px solid #2563EB; padding-left: 20px; margin-left: 10px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💼 Quote Request Received!</h1>
          </div>
          <div class="content">
            <p>Hi ${data.name},</p>
            <p>Thank you for requesting a quote from Axentrixx!</p>
            
            <div class="info-box">
              <h3>Your Project Details:</h3>
              <p><strong>Project Type:</strong> ${data.projectType}</p>
              <p><strong>Budget Range:</strong> ${data.budget}</p>
              <p><strong>Timeline:</strong> ${data.timeline}</p>
              ${data.additionalServices && data.additionalServices.length > 0 ?
        `<p><strong>Additional Services:</strong> ${data.additionalServices.join(', ')}</p>` : ''}
            </div>
            
            <div class="timeline">
              <h3>What Happens Next:</h3>
              <div class="timeline-item">
                <strong>Step 1:</strong> Our team reviews your requirements (2 hours)
              </div>
              <div class="timeline-item">
                <strong>Step 2:</strong> We analyze scope and create project plan (12 hours)
              </div>
              <div class="timeline-item">
                <strong>Step 3:</strong> You receive detailed quote (24 hours)
              </div>
              <div class="timeline-item">
                <strong>Step 4:</strong> Follow-up call to discuss and refine
              </div>
            </div>
            
            <p><strong>Questions?</strong> Call us at ${process.env.COMPANY_PHONE}</p>
            
            <p>Best regards,<br>The Axentrixx Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Axentrixx. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  // Career application confirmation
  careerConfirmation: (data) => {
    const isGeneralApplication = !data.position || data.position === 'General Application' || data.position === '';

    return {
      subject: isGeneralApplication ? 'Resume Received - Axentrixx Careers' : 'Application Received - Axentrixx Careers',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; border-left: 4px solid #2563EB; margin: 20px 0; border-radius: 5px; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 ${isGeneralApplication ? 'Resume Received!' : 'Application Received!'}</h1>
            </div>
            <div class="content">
              <p>Hi ${data.fullName},</p>
              <p>${isGeneralApplication
          ? 'Thank you for submitting your resume to Axentrixx! We appreciate your interest in joining our team.'
          : 'Thank you for applying to Axentrixx!'}</p>
              
              <div class="info-box">
                <h3>Application Details:</h3>
                ${isGeneralApplication
          ? '<p><strong>Type:</strong> General Application - Future Opportunities</p>'
          : `<p><strong>Position:</strong> ${data.position}</p>`}
                <p><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
              
              <h3>What's Next:</h3>
              <ul>
                ${isGeneralApplication
          ? `<li>Your resume will be kept in our talent pool for future opportunities</li>
                     <li>When a suitable position opens up that matches your profile, we'll reach out to you</li>
                     <li>You can check our careers page regularly for new openings</li>`
          : `<li>Our HR team will review your application within 3-5 business days</li>
                     <li>If your profile matches our requirements, we'll contact you for an interview</li>
                     <li>You'll receive updates via email at every stage</li>`}
              </ul>
              
              <p>We appreciate your interest in joining our team!</p>
              
              <p>Best regards,<br>The Axentrixx HR Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Axentrixx. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };
  },

  // Team notification templates
  teamNotification: (type, data) => {
    const templates = {
      contact: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
      consultation: `
        <h2>New Consultation Booking</h2>
        <p><strong>Client:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Project Description:</strong></p>
        <p>${data.projectDescription}</p>
        <hr>
        <p><strong>Action Required:</strong></p>
        <ul>
          <li>Review project description</li>
          <li>Prepare relevant questions</li>
          <li>Send meeting link to client</li>
          <li>Add to team calendar</li>
        </ul>
      `,
      quote: `
        <h2>New Quote Request</h2>
        <p><strong>Client:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        ${data.additionalServices && data.additionalServices.length > 0 ?
          `<p><strong>Additional Services:</strong> ${data.additionalServices.join(', ')}</p>` : ''}
        <p><strong>Project Details:</strong></p>
        <p>${data.projectDetails}</p>
        <hr>
        <p><strong>Action Required:</strong></p>
        <ul>
          <li>Review project requirements</li>
          <li>Prepare detailed quote with pricing breakdown</li>
          <li>Send quote to client within 24 hours</li>
          <li>Schedule follow-up call</li>
          <li>Add to CRM system</li>
        </ul>
      `,
      career: `
        <h2>New Job Application</h2>
        <p><strong>Candidate:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Position:</strong> ${data.position}</p>
        <p><strong>LinkedIn:</strong> ${data.linkedin || 'Not provided'}</p>
        <p><strong>Portfolio:</strong> ${data.portfolio || 'Not provided'}</p>
        <p><strong>Introduction:</strong></p>
        <p>${data.introduction}</p>
        <p><strong>Resume:</strong> Attached</p>
        <hr>
        <p><strong>Action Required:</strong></p>
        <ul>
          <li>Review resume and application</li>
          <li>Assess candidate fit</li>
          <li>Schedule interview if qualified</li>
          <li>Update candidate in ATS</li>
        </ul>
      `
    };

    return {
      subject: `New ${type.charAt(0).toUpperCase() + type.slice(1)} - ${data.name || data.fullName}`,
      html: templates[type]
    };
  }
};

// Send email function
export const sendEmail = async (to, subject, html, attachments = []) => {
  try {
    const mailOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    };

    // Add attachments if provided
    if (attachments && attachments.length > 0) {
      mailOptions.attachments = attachments;
    }

    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email send failed:', error);
    return { success: false, error: error.message };
  }
};
