import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import type { APIGatewayProxyHandler } from 'aws-lambda';
import serverless from 'serverless-http';
import { getBlogPosts } from './notion.js';

// Initialize Express app
const app = express();

// Handle ESM module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

// Validate required environment variables
if (!process.env.NOTION_API_KEY) {
  console.error('Missing required environment variable: NOTION_API_KEY');
  process.exit(1);
}

if (!process.env.NOTION_DATABASE_ID) {
  console.error('Missing required environment variable: NOTION_DATABASE_ID');
  process.exit(1);
}

// Enhanced CORS configuration
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? ['https://ayatsubakino.com'] 
  : ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    console.log('Request from origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn('Blocked request from unauthorized origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('Health check request received');
  res.json({ status: 'healthy' });
});

// Posts endpoint
app.get('/api/posts', async (req, res) => {
  try {
    console.log('Fetching posts from Notion...');
    const posts = await getBlogPosts();
    console.log(`Successfully fetched ${posts.length} posts`);
    res.json(posts);
  } catch (error: any) {
    console.error('Error fetching posts from Notion:', {
      message: error.message,
      stack: error.stack
    });
    res.status(500).json({ 
      error: 'Failed to fetch posts from Notion',
      details: error.message
    });
  }
});

// Enhanced error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', {
    message: err.message,
    stack: err.stack
  });
  res.status(500).json({ error: 'Internal Server Error' });
});

// Create serverless handler for AWS Lambda
export const handler = serverless(app);

// Start local server if not in Lambda environment
if (process.env.NODE_ENV !== 'production') {
  const port = parseInt(process.env.PORT || '3000', 10);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Available routes:');
    console.log('- /api/health (Health check)');
    console.log('- /api/posts (Blog posts)');
  });
} 