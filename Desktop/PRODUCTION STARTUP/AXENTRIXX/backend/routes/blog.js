import express from 'express';
import { body, validationResult } from 'express-validator';
import Blog from '../models/Blog.js';

const router = express.Router();

// GET /api/blog - Get all published blog posts
router.get('/', async (req, res) => {
  try {
    const { category, featured, limit = 20, page = 1 } = req.query;
    
    const query = { published: true };
    
    if (category && category !== 'All Posts') {
      query.category = category;
    }
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const blogs = await Blog.find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(parseInt(limit))
      .skip(skip)
      .select('-content'); // Exclude full content for list view
    
    const total = await Blog.countDocuments(query);
    
    res.json({
      success: true,
      data: blogs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Blog list error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/blog/:slug - Get single blog post by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ 
      slug: req.params.slug,
      published: true 
    });
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    
    // Increment view count
    blog.views += 1;
    await blog.save();
    
    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Blog fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/blog/categories/list - Get all categories
router.get('/categories/list', async (req, res) => {
  try {
    const categories = await Blog.distinct('category', { published: true });
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Categories fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
