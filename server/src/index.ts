import express from 'express';
import cors from 'cors';
import { getBlogPosts } from './notion.js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables with fallbacks
const envConfig = {
  PORT: process.env.PORT || '8080',
  NOTION_API_KEY: process.env.NOTION_API_KEY || '',
  FRONTEND_URL: process.env.FRONTEND_URL || 'https://ayatsubakino.com'
};

// Validate required environment variables
if (!envConfig.NOTION_API_KEY) {
  console.error('Missing required environment variable: NOTION_API_KEY');
  process.exit(1);
}

const app = express();
const port = parseInt(envConfig.PORT, 10);
const allowedOrigins = [
  'http://localhost:5173', // Vite's default port
  'https://ayatsubakino.com', // Your production domain
  envConfig.FRONTEND_URL, // From environment
].filter((origin): origin is string => Boolean(origin));

// Debug environment (without exposing sensitive values)
console.log('Server configuration:', {
  port,
  allowedOrigins,
  hasNotionKey: !!envConfig.NOTION_API_KEY
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