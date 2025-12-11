# Axentrixx - Professional Technology Solutions

A modern, full-stack web application for Axentrixx, a technology consulting company specializing in custom software development, healthcare management systems, and business intelligence solutions.

## 🚀 Tech Stack

### Frontend
- **Framework:** React Router v7
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Motion (Framer Motion)

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Email:** Nodemailer (Gmail SMTP)
- **File Uploads:** Multer

## 📁 Project Structure

```
apps/
├── web/              # Frontend application
│   ├── src/
│   │   ├── app/      # Pages and routes
│   │   └── components/  # Reusable components
│   └── package.json
└── backend/          # Backend API
    ├── config/       # Configuration files
    ├── models/       # MongoDB models
    ├── routes/       # API routes
    ├── server.js     # Entry point
    └── package.json
```

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Gmail account with App Password for email service

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd create-anything
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd apps/backend
   npm install

   # Install frontend dependencies
   cd ../web
   npm install
   ```

3. **Configure environment variables**

   **Backend (.env):**
   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:4000
   MONGODB_URI=your-mongodb-connection-string
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-gmail-app-password
   CONTACT_EMAIL=contact@axentrixx.com
   SALES_EMAIL=sales@axentrixx.com
   HR_EMAIL=hr@axentrixx.com
   TEAM_EMAIL=team@axentrixx.com
   COMPANY_NAME=Axentrixx
   COMPANY_PHONE=+1 (555) 123-4567
   COMPANY_ADDRESS=San Francisco, CA
   ```

   **Web (.env):**
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Run development servers**
   ```bash
   # Terminal 1 - Backend
   cd apps/backend
   npm run dev

   # Terminal 2 - Frontend
   cd apps/web
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:4000
   - Backend API: http://localhost:5000

## 📧 Email Configuration

The application uses Gmail SMTP for sending emails. You need to:

1. Enable 2-Step Verification on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password in `SMTP_PASS` environment variable

## 🗄️ Database Setup

### Seeding the Database

```bash
cd apps/backend
node seed.js
```

This will populate the database with:
- Sample blog posts
- Sample job openings

## 🌐 Features

- **Homepage:** Company overview with services and highlights
- **About:** Company information and founder profiles
- **Services:** Detailed service offerings
- **Products:** HMS (Hospital Management System) showcase
- **Case Studies:** Project portfolio
- **Blog:** Company blog and insights
- **Careers:** Job listings and application system
- **Contact:** Contact form with email notifications
- **Request Quote:** Quote request system
- **Book Consultation:** Consultation booking system
- **Newsletter:** Email subscription system

## 📮 API Endpoints

### Contact & Communication
- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter subscription
- `POST /api/consultation` - Book consultation
- `POST /api/quote` - Request quote

### Careers
- `POST /api/careers/apply` - Submit job application (with resume upload)

### Content
- `GET /api/blog` - Get blog posts
- `GET /api/blog/:id` - Get single blog post
- `GET /api/case-studies` - Get case studies
- `GET /api/jobs` - Get job openings

## 🚀 Deployment

### Backend Deployment
1. Set all environment variables on your hosting platform
2. Ensure MongoDB is accessible
3. Deploy using your preferred platform (Heroku, Railway, DigitalOcean, etc.)

### Frontend Deployment
1. Update `VITE_API_URL` to production backend URL
2. Deploy using React Router v7 deployment guides
3. Configure domain and SSL

## 📝 Environment Variables Checklist

Before deployment, ensure all these are set:

**Backend:**
- [ ] `MONGODB_URI` - Production MongoDB connection
- [ ] `SMTP_USER` - Production email
- [ ] `SMTP_PASS` - Production email app password
- [ ] `FRONTEND_URL` - Production frontend domain
- [ ] `HR_EMAIL` - Production HR email
- [ ] Update all company contact emails

**Frontend:**
- [ ] `VITE_API_URL` - Production backend URL

## 🔒 Security Notes

- Never commit `.env` files to version control
- Use strong passwords for MongoDB
- Keep email app passwords secure
- Enable CORS only for trusted domains in production
- Use HTTPS in production

## 📄 License

Proprietary - Axentrixx

## 👥 Contact

For questions or support, contact: contact@axentrixx.com
