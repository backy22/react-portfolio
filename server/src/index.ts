import express from 'express';
import cors from 'cors';
import { getBlogPosts } from './notion.js';

const app = express();
const port = 3002;

// CORS setup
app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
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