import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

// GET /api/jobs - Get all active job openings
router.get('/', async (req, res) => {
  try {
    const { department, location } = req.query;
    
    const query = { active: true };
    
    if (department && department !== 'All') {
      query.department = department;
    }
    
    if (location && location !== 'All') {
      query.location = location;
    }
    
    const jobs = await Job.find(query)
      .sort({ postedDate: -1 });
    
    res.json({
      success: true,
      data: jobs
    });
  } catch (error) {
    console.error('Jobs list error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/jobs/:id - Get single job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findOne({ 
      _id: req.params.id,
      active: true 
    });
    
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    
    res.json({
      success: true,
      data: job
    });
  } catch (error) {
    console.error('Job fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/jobs/filters/departments - Get all departments
router.get('/filters/departments', async (req, res) => {
  try {
    const departments = await Job.distinct('department', { active: true });
    res.json({
      success: true,
      data: departments
    });
  } catch (error) {
    console.error('Departments fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/jobs/filters/locations - Get all locations
router.get('/filters/locations', async (req, res) => {
  try {
    const locations = await Job.distinct('location', { active: true });
    res.json({
      success: true,
      data: locations
    });
  } catch (error) {
    console.error('Locations fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
