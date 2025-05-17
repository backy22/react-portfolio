import express from 'express';
import cors from 'cors';
import { getBlogPosts } from './notion.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['PORT', 'NOTION_API_KEY'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  process.exit(1);
}

const app = express();
const port = process.env.PORT || 3002;
const allowedOrigins = [
  'http://localhost:5173', // Vite's default port
  'https://ayatsubakino.com', // Your production domain
  process.env.FRONTEND_URL, // Optional: from environment variable
].filter(Boolean);

// Debug environment (without exposing sensitive values)
console.log('Server configuration:', {
  port,
  allowedOrigins,
  environment: process.env.NODE_ENV || 'production',
  hasNotionKey: !!process.env.NOTION_API_KEY
});

// CORS setup
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn('Blocked request from unauthorized origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Received request to /');
  res.send('Hello World!');
});

app.get('/api/test', (req, res) => {
  console.log('Received request to /api/test');
  res.json({ message: 'Server is running!' });
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await getBlogPosts();
    res.json(posts);
  } catch (error: any) {
    console.error('Detailed error in /api/posts:', {
      message: error.message,
      stack: error.stack,
      error
    });
    res.status(500).json({ 
      error: 'Failed to fetch blog posts', 
      details: error.message 
    });
  }
});

// Start server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Try accessing:');
  console.log(`- http://localhost:${port}/`);
  console.log(`- http://localhost:${port}/api/test`);
  console.log(`- http://localhost:${port}/api/posts`);
});

// Add error handling
server.on('error', (error: any) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
  } else {
    console.error('Server error:', error);
  }
}); 