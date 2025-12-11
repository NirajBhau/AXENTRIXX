import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';
import Job from './models/Job.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const blogPosts = [
  {
    title: "The Future of Healthcare Technology: 5 Trends to Watch in 2025",
    excerpt: "Explore the transformative technologies reshaping healthcare delivery, from AI-powered diagnostics to blockchain-based patient records.",
    content: `<p>Healthcare technology is evolving at an unprecedented pace. In this comprehensive guide, we explore five key trends that will shape the future of healthcare delivery in 2025 and beyond.</p>
    
    <h2>1. AI-Powered Diagnostics</h2>
    <p>Artificial intelligence is revolutionizing medical diagnostics, enabling faster and more accurate disease detection...</p>
    
    <h2>2. Telemedicine Expansion</h2>
    <p>The pandemic accelerated telemedicine adoption, and it's here to stay...</p>
    
    <h2>3. Blockchain for Patient Records</h2>
    <p>Blockchain technology promises secure, interoperable patient data management...</p>
    
    <h2>4. IoT and Wearable Devices</h2>
    <p>Connected devices are enabling continuous patient monitoring...</p>
    
    <h2>5. Personalized Medicine</h2>
    <p>Genomics and data analytics are making personalized treatment plans a reality...</p>`,
    category: "Industry Insights",
    author: {
      name: "Dr. Sarah Chen",
      role: "CEO & Healthcare Technology Expert",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    featured: true,
    readTime: "8 min read",
    tags: ["Healthcare", "Technology", "AI", "Future Trends"],
    published: true,
    slug: "future-of-healthcare-technology-2025"
  },
  {
    title: "How AI is Revolutionizing Medical Diagnostics",
    excerpt: "Discover how artificial intelligence is improving accuracy and speed in medical diagnostics, saving lives and reducing costs.",
    content: `<p>Artificial Intelligence is transforming medical diagnostics in remarkable ways...</p>`,
    category: "Technology",
    author: {
      name: "Dr. Michael Rodriguez",
      role: "Chief Medical Officer",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    readTime: "6 min read",
    tags: ["AI", "Diagnostics", "Healthcare"],
    published: true,
    slug: "ai-revolutionizing-medical-diagnostics"
  },
  {
    title: "HIPAA Compliance: A Complete Guide for Healthcare Providers",
    excerpt: "Everything you need to know about maintaining HIPAA compliance in the digital age, with practical tips and best practices.",
    content: `<p>HIPAA compliance is critical for healthcare providers...</p>`,
    category: "Compliance",
    author: {
      name: "Jennifer Thompson",
      role: "Compliance Officer",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    image: "https://images.pexels.com/photos/6519899/pexels-photo-6519899.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    readTime: "10 min read",
    tags: ["HIPAA", "Compliance", "Security"],
    published: true,
    slug: "hipaa-compliance-complete-guide"
  }
];

const jobs = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    workMode: "Full-time",
    salary: "$80,000 - $120,000",
    description: "We're looking for an experienced Full Stack Developer to join our growing engineering team and help build innovative web applications that empower businesses globally.",
    responsibilities: [
      "Design, develop, and maintain scalable web applications using React, Node.js, and modern technologies",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Write clean, maintainable, and well-documented code following best practices",
      "Participate in code reviews and provide constructive feedback to team members",
      "Optimize application performance and ensure responsive design across devices"
    ],
    qualifications: [
      "5+ years of experience in full stack web development",
      "Strong proficiency in React, Node.js, JavaScript/TypeScript",
      "Experience with modern frameworks like Next.js, Express.js, or similar",
      "Solid understanding of RESTful APIs and database design",
      "Excellent communication and teamwork abilities"
    ],
    niceToHave: [
      "Experience with microservices architecture",
      "Knowledge of GraphQL",
      "Contributions to open-source projects"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible remote work arrangements",
      "Health insurance coverage",
      "Professional development budget"
    ],
    active: true
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    workMode: "Full-time",
    salary: "$60,000 - $90,000",
    description: "Join our design team to create beautiful, intuitive user experiences for our digital products that serve clients worldwide.",
    responsibilities: [
      "Design user-centered interfaces for web and mobile applications",
      "Create wireframes, prototypes, and high-fidelity mockups using Figma",
      "Conduct user research and usability testing to inform design decisions",
      "Collaborate with developers to ensure accurate implementation of designs",
      "Develop and maintain design systems and component libraries"
    ],
    qualifications: [
      "3+ years of experience in UI/UX design",
      "Expert proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio demonstrating user-centered design process",
      "Understanding of responsive design and mobile-first principles",
      "Strong communication and presentation skills"
    ],
    niceToHave: [
      "Motion design and animation skills",
      "Experience with design tokens",
      "Understanding of accessibility standards"
    ],
    benefits: [
      "Competitive salary",
      "Remote-first culture",
      "Creative freedom",
      "Design tools subscriptions"
    ],
    active: true
  },
  {
    title: "Data Analytics Intern",
    department: "Analytics",
    location: "Hybrid - Mumbai",
    workMode: "Internship",
    salary: "₹15,000 - ₹25,000/month",
    description: "Kickstart your career in data analytics by working on real-world projects that impact business decisions.",
    responsibilities: [
      "Assist in collecting, analyzing, and interpreting data sets",
      "Create basic reports and dashboards using Excel and visualization tools",
      "Support senior analysts in data cleaning and preparation tasks",
      "Learn and apply statistical analysis techniques"
    ],
    qualifications: [
      "Currently pursuing or recently completed degree in Statistics, Mathematics, CS, or related field",
      "Basic knowledge of SQL and Excel",
      "Analytical mindset and attention to detail",
      "Eagerness to learn and grow"
    ],
    niceToHave: [
      "Familiarity with Python or R",
      "Experience with Tableau or Power BI"
    ],
    benefits: [
      "Hands-on experience with real projects",
      "Mentorship from experienced analysts",
      "Potential for full-time conversion"
    ],
    active: true
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Blog.deleteMany({});
    await Job.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert blog posts
    const insertedBlogs = await Blog.insertMany(blogPosts);
    console.log(`✅ Inserted ${insertedBlogs.length} blog posts`);

    // Insert jobs
    const insertedJobs = await Job.insertMany(jobs);
    console.log(`✅ Inserted ${insertedJobs.length} job openings`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\nSummary:');
    console.log(`- Blog Posts: ${insertedBlogs.length}`);
    console.log(`- Job Openings: ${insertedJobs.length}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
