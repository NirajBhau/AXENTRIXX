import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
import contactRoutes from './routes/contact.js';
import consultationRoutes from './routes/consultation.js';
import newsletterRoutes from './routes/newsletter.js';
import quoteRoutes from './routes/quote.js';
import careerRoutes from './routes/career.js';
import blogRoutes from './routes/blog.js';
import jobRoutes from './routes/jobs.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDatabase();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration - Allow all origins for development
app.use(cors({
  origin: '*',
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Disable helmet for development
// app.use(helmet());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use('/api/', limiter);

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/book-consultation', consultationRoutes);
app.use('/api/request-quote', quoteRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/jobs', jobRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Axentrixx Backend API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service configured`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});
